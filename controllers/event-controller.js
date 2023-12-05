import Prod from "../models/Product.js";

export const getAllEvents = async (req, res, next) => {
  let events;
  try {
    events = await Prod.find();
  } catch (err) {
    return console.log(err);
  }
  if (!events) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ events });
};


// export const postEvents = async (req, res) => {
//     const { name, type, prod_type, location, date, time } = req.body;
    
//     if (
//       !name &&
//       name.trim() === "" &&
//       !type &&
//       type.trim() === "" &&
//       !prod_type &&
//       prod_type.trim() === "" &&
//       !location &&
//       location.trim() === "" &&
//       !date &&
//       date.trim() === "" &&
//       !time &&
//       time.trim() === ""
//     ) {
//       return res.status(404).json({ message: "Invalid Inputs" });
//     }

//     let event;
//     try {
//       event = new Prod({ name, type, prod_type, location, date, time, image });
//       event = await event.save();
//     } catch (err) {
//       return console.log(err);
//     }
//     if (!event) {
//       return res.status(500).json({ message: "Unexpected Error Occured" });
//     }
//     return res.status(200).json({ id: event._id });
//   };
  