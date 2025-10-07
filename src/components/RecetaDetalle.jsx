const RecetaDetalle = ({ receta, onBack, onEdit }) => {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <button onClick={onBack} className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a Recetas
                </button>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center px-4">{receta.titulo}</h2>
                <div className="flex space-x-2">
                    <button onClick={() => onEdit(receta)} className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                        Editar
                    </button>
                </div>
            </div>
            <img src={receta.imagen} alt={receta.titulo} className="w-full h-80 object-cover rounded-lg mb-6 shadow-md"/>
            <p className="text-lg mb-6 italic text-gray-600 dark:text-gray-400">{receta.descripcion}</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-indigo-600 dark:text-indigo-400">Ingredientes</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {receta.ingredientes.split(',').map((ing, index) => (
                            <li key={index}>{ing.trim()}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-indigo-600 dark:text-indigo-400">Instrucciones</h3>
                    <p className="text-gray-700 dark:text-gray-300">{receta.instrucciones}</p>
                </div>
            </div>
        </div>
    );
};
export default RecetaDetalle;