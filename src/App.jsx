import { useState, useEffect } from 'react';
import RecetaDetalle from './components/RecetaDetalle.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import initialRecipes from './data/recetas.json';

const getInitialState = (key, defaultValue) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
        console.error("Error al cargar desde localStorage:", error);
        return defaultValue;
    }
};

function App() {
    const [recetas, setRecetas] = useState(() => getInitialState('recetas', initialRecipes));
    const [filtroCategoria, setFiltroCategoria] = useState('Todas');
    const [filtroDificultad, setFiltroDificultad] = useState('Todas');
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(() => getInitialState('darkMode', false));
    const [favoritas, setFavoritas] = useState(() => getInitialState('favoritas', []));
    const [showForm, setShowForm] = useState(false);
    const [editingReceta, setEditingReceta] = useState(null);
    const [ordenAlfabetico, setOrdenAlfabetico] = useState(null);
    const [recetaDelDia, setRecetaDelDia] = useState(null);
    const [selectedReceta, setSelectedReceta] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash.startsWith('receta-')) {
                const id = parseInt(hash.split('-')[1]);
                const recetaEncontrada = recetas.find(r => r.id === id);
                if (recetaEncontrada) {
                    setSelectedReceta(recetaEncontrada);
                }
            } else {
                setSelectedReceta(null);
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [recetas]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('recetas', JSON.stringify(recetas));
    }, [recetas]);

    useEffect(() => {
        localStorage.setItem('favoritas', JSON.stringify(favoritas));
    }, [favoritas]);

    useEffect(() => {
        if (recetas.length === 0) return;
        const hoy = new Date().toDateString();
        const recetaGuardada = getInitialState('recetaDelDia', null);
        if (recetaGuardada && recetaGuardada.date === hoy) {
            setRecetaDelDia(recetaGuardada.receta);
        } else {
            const randomReceta = recetas[Math.floor(Math.random() * recetas.length)];
            setRecetaDelDia(randomReceta);
            localStorage.setItem('recetaDelDia', JSON.stringify({ date: hoy, receta: randomReceta }));
        }
    }, [recetas]);

    const toggleFavorito = (recetaId) => {
        setFavoritas(prev => prev.includes(recetaId) ? prev.filter(id => id !== recetaId) : [...prev, recetaId]);
    };

    const handleAddReceta = (newRecipe) => {
        setRecetas(prev => [...prev, { ...newRecipe, id: Date.now() }]);
    };

    const handleEditReceta = (updatedRecipe) => {
        setRecetas(prev => prev.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
    };

    const getDificultadColor = (dificultad) => {
        switch (dificultad) {
            case 'Baja': return 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200';
            case 'Media': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200';
            case 'Alta': return 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200';
            default: return 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200';
        }
    };

    const recetasFiltradas = recetas
        .filter(receta => {
            if (filtroCategoria === 'Favoritas') {
                return favoritas.includes(receta.id);
            }
            return filtroCategoria === 'Todas' || receta.categoria === filtroCategoria;
        })
        .filter(receta => filtroDificultad === 'Todas' || receta.dificultad === filtroDificultad)
        .filter(receta =>
            receta.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            receta.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            receta.ingredientes.toLowerCase().includes(terminoBusqueda.toLowerCase())
        )
        .sort((a, b) => {
            if (!ordenAlfabetico) return 0;
            return ordenAlfabetico === 'asc' ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo);
        });

    const categorias = ['Todas', 'Aperitivo', 'Primero', 'Segundo', 'Postre', 'Favoritas'];
    const dificultades = ['Todas', 'Baja', 'Media', 'Alta'];
    const handleOpenAddForm = () => { setEditingReceta(null); setShowForm(true); };
    const handleOpenEditForm = (receta) => { setEditingReceta(receta); setShowForm(true); };

    if (selectedReceta) {
        return <RecetaDetalle receta={selectedReceta} onBack={() => window.location.hash = ''} onEdit={handleOpenEditForm} />;
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4 sm:p-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center w-full sm:text-left">Recetas de la Cocina Española</h1>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full transition-colors duration-200 mt-4 sm:mt-0 bg-gray-200 dark:bg-gray-700">
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>
                <p className="text-center text-lg mb-6">Un total de <strong>{recetas.length}</strong> recetas disponibles para explorar.</p>
                {recetaDelDia && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 text-center border-l-4 border-indigo-500">
                        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">📅 Receta del Día</h3>
                        <h4 className="text-2xl font-semibold mt-2">{recetaDelDia.titulo}</h4>
                        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{recetaDelDia.descripcion}</p>
                    </div>
                )}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <input
                        type="text"
                        placeholder="Buscar por título, ingredientes..."
                        className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                    />
                    <div className="flex flex-wrap justify-center md:space-x-2 space-x-1 mt-4 md:mt-0">
                        {categorias.map(cat => (
                            <button key={cat} onClick={() => { setFiltroCategoria(cat); setFiltroDificultad('Todas'); }} className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${ (filtroCategoria === cat && cat !== 'Favoritas') ? 'bg-indigo-600 text-white shadow-lg' : filtroCategoria === 'Favoritas' && cat === 'Favoritas' ? 'bg-pink-600 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' }`}>
                                {cat === 'Favoritas' ? '⭐ Favoritas' : cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center mb-6 space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Filtrar por Dificultad:</span>
                    {dificultades.map(diff => (
                        <button key={diff} onClick={() => setFiltroDificultad(diff)} className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${ filtroDificultad === diff ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600' }`}>
                            {diff}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Ordenar por Título:</span>
                        <button onClick={() => setOrdenAlfabetico(ordenAlfabetico === 'asc' ? 'desc' : 'asc')} className="px-2 py-1 rounded-md text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            {ordenAlfabetico === 'asc' ? 'A-Z ↓' : ordenAlfabetico === 'desc' ? 'Z-A ↑' : 'Ordenar'}
                        </button>
                    </div>
                    <button onClick={handleOpenAddForm} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        Añadir Receta
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recetasFiltradas.map(receta => (
                        <div key={receta.id} className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative bg-white dark:bg-gray-800">
                            <div className="relative">
                                <a href={`#receta-${receta.id}`} className="block">
                                    <img src={receta.imagen} alt={receta.titulo} className="w-full h-48 object-cover"/>
                                </a>
                                <button onClick={(e) => { e.stopPropagation(); toggleFavorito(receta.id); }} className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm bg-black/30 transition-transform transform ${favoritas.includes(receta.id) ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-red-500'}`}>
                                    ⭐
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${ receta.categoria === 'Aperitivo' ? 'bg-amber-100 text-amber-800 dark:bg-amber-700 dark:text-amber-100' : receta.categoria === 'Primero' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-700 dark:text-emerald-100' : receta.categoria === 'Segundo' ? 'bg-sky-100 text-sky-800 dark:bg-sky-700 dark:text-sky-100' : 'bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-pink-100' }`}>
                                        {receta.categoria}
                                    </span>
                                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getDificultadColor(receta.dificultad)}`}>
                                        {receta.dificultad}
                                    </span>
                                </div>
                                <a href={`#receta-${receta.id}`} className="block">
                                    <h2 className="text-xl font-bold mb-2">{receta.titulo}</h2>
                                    <p className="text-sm mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">{receta.descripcion}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {showForm && <RecipeForm initialData={editingReceta} onSave={editingReceta ? handleEditReceta : handleAddReceta} onClose={() => setShowForm(false)} />}
            </div>
        </div>
    );
}

export default App;