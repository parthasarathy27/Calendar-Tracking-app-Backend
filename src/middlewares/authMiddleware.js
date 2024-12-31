// In your dashboard route
router.get('/dashboard', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.set('ETag', ''); // Clear the ETag header
    res.set('Last-Modified', new Date().toUTCString()); // Update Last-Modified to prevent caching

    res.json({
        message: 'Dashboard data here',
        // your data
    });
});
