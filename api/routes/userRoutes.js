const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware');

// 🔒 Sadece giriş yapmış kullanıcılar ulaşabilir
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-__v');
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// 🛡️ Sadece adminler ulaşabilsin
router.get('/all', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Yetki reddedildi' });
  }

  try {
    const users = await User.find().select('-__v');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// 🔐 Sadece admin olanlar tüm kullanıcıları görebilir
router.get('/', verifyToken, async (req, res) => {
    try {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Yetkiniz yok' });
      }
  
      const users = await User.find().select('-password -__v');
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Kullanıcılar alınamadı' });
    }
  });

  // 🔁 Kullanıcı güncelleme (sadece admin)
router.put('/:id', verifyToken, async (req, res) => {
    try {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Yetkiniz yok' });
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          email: req.body.email,
          role: req.body.role,
        },
        { new: true }
      ).select('-password -__v');
  
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Kullanıcı güncellenemedi' });
    }
  });

 // 📊 Dashboard sayıları
router.get('/stats', verifyToken, async (req, res) => {
    try {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Yetkiniz yok' });
      }
  
      const total = await User.countDocuments();
      const admins = await User.countDocuments({ role: 'admin' });
      const personnel = await User.countDocuments({ role: 'personel' });
  
      res.json({ total, admins, personnel });
    } catch (err) {
      res.status(500).json({ error: 'İstatistik getirilemedi' });
    }
  });

  // 🆕 Son eklenen kullanıcı
router.get('/latest', verifyToken, async (req, res) => {
    try {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Yetkiniz yok' });
      }
  
      const latestUser = await User.findOne().sort({ createdAt: -1 }).select("-password -__v");
      res.json(latestUser);
    } catch (err) {
      res.status(500).json({ error: 'Son kullanıcı getirilemedi' });
    }
  });

module.exports = router;