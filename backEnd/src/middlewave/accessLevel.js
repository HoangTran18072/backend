
    const accessLevelMiddlewave = (requiredAccess) => (req, res, next) => {
        const userAccess = req.headers['x-user-id'] // 0; // Giả sử access của người dùng được lưu trong req.user.access
        if (userAccess < requiredAccess) {
          return res.status(403).json({ message: 'Access forbidden. Insufficient access.' });
        }
      
        next();
      };

module.exports = {accessLevelMiddlewave};