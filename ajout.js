// ajout.js
const tasks = [];

module.exports = (app) => {
    // Récupérer toutes les tâches
    app.get('/tasks', (req, res) => {
        res.json(tasks);
    });

    // Ajouter une nouvelle tâche
    app.post('/tasks', (req, res) => {
        const { title, description, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Le titre est requis' });
        }

        const newTask = {
            id: tasks.length + 1,
            title,
            description: description || '',
            dueDate: dueDate || null
        };

        tasks.push(newTask);
        res.status(201).json(newTask);
    });
};
