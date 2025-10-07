import { useState } from 'react';

const RecipeForm = ({ initialData, onSave, onClose }) => {
    const [recipeData, setRecipeData] = useState(initialData || {
        titulo: '', descripcion: '', ingredientes: '', instrucciones: '', categoria: 'Aperitivo', dificultad: 'Baja', imagen: 'https://picsum.photos/400/250'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(recipeData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75">
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 dark:text-white">
                <div className="flex justify-between items-center mb-4 border-b pb-4">
                    <h2 className="text-2xl font-bold">{initialData ? 'Editar Receta' : 'Añadir Nueva Receta'}</h2>
                    <button onClick={onClose} className="text-4xl font-light leading-none text-gray-500 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block"><span className="text-gray-700 dark:text-gray-300">Título:</span><input type="text" name="titulo" value={recipeData.titulo} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600" /></label>
                    <label className="block"><span className="text-gray-700 dark:text-gray-300">Descripción:</span><textarea name="descripcion" value={recipeData.descripcion} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"></textarea></label>
                    <label className="block"><span className="text-gray-700 dark:text-gray-300">Ingredientes (separados por comas):</span><textarea name="ingredientes" value={recipeData.ingredientes} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"></textarea></label>
                    <label className="block"><span className="text-gray-700 dark:text-gray-300">Instrucciones:</span><textarea name="instrucciones" value={recipeData.instrucciones} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"></textarea></label>
                    <div className="flex space-x-4">
                        <label className="block w-1/2"><span className="text-gray-700 dark:text-gray-300">Categoría:</span><select name="categoria" value={recipeData.categoria} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600">{['Aperitivo', 'Primero', 'Segundo', 'Postre'].map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></label>
                        <label className="block w-1/2"><span className="text-gray-700 dark:text-gray-300">Dificultad:</span><select name="dificultad" value={recipeData.dificultad} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600">{['Baja', 'Media', 'Alta'].map(diff => <option key={diff} value={diff}>{diff}</option>)}</select></label>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">{initialData ? 'Guardar Cambios' : 'Añadir Receta'}</button>
                </form>
            </div>
        </div>
    );
};
export default RecipeForm;