// const db = require("../models");

// const create = (req, res) => {
//   db.Posts.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//       comment: [
//         {
//           comContent: req.body.comContent,
//         },
//       ],
//     },
//     (err, createdComment) => {
//       if (err) return res.status(404).json({ error: err.message });
//       return res.status(200).json(createdComment);
//     }
//   );
// };

// const update = (req, res) => {
//   db.Posts.updateMany(
//     {},
//     {
//       $set: req.body,
//     },
//     {
//       new: true,
//     },
//     (err, updatedComment) => {
//       if (err) return res.status(404).json({ error: err.message });
//       return res.status(200).json(updatedComment);
//     }
//   );
// };

// module.exports = {
//   create,
// };
