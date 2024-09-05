const pool = require('../config/db');

exports.createHistory = async (req, res) => {
  const { product_id, shop_id, action, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO action_history (product_id, shop_id, action, quantity, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
      [product_id, shop_id, action, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}