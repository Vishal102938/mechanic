import ServiceRequest from "../models/serviceModel.js";

export const createServiceRequest = async (req, res) => {
  try {
    const { 
      name, 
      mobile, 
      state, 
      district, 
      locality, 
      serviceType, 
      description,
      houseNumber,
      street,
      landmark,
      pincode
    } = req.body;

    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. Please login." });
    }

    const request = await ServiceRequest.create({
      userId,
      name,
      mobile,
      houseNumber,
      street,
      landmark,
      pincode,
      state,
      district,
      locality,
      serviceType,
      description,
      
    });

    return res.status(201).json(request);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating service request" });
  }
};

export const getAllRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find().populate("userId", "name email");
    return res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching requests" });
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const request = await ServiceRequest.findByIdAndUpdate(
      id, { status }, { new: true }
    );

    if (!request) return res.status(404).json({ message: "Request not found" });

    return res.status(200).json(request);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error updating request status" });
  }
};

export const getMyRequests = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const requests = await ServiceRequest.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching user requests" });
  }
};


export const getStats = async (req, res) => {
  try {
    const total = await ServiceRequest.countDocuments();
    const accepted = await ServiceRequest.countDocuments({ status: "accepted" });
    const rejected = await ServiceRequest.countDocuments({ status: "rejected" });
    const pending = await ServiceRequest.countDocuments({ status: "pending" });

    res.json({ total, accepted, rejected, pending });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching stats" });
  }
};

