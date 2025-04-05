// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../utils/supabase";

async function getLocationFromIp(ip) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    if (data.status === "success") {
      return {
        country: data.country,
        city: data.city,
        region: data.regionName,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({ message: "Error fetching messages" });
    }
  }

  if (req.method === "POST") {
    try {
      let { message, name } = req.body;

      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      if (!name) {
        name = "Anonymous";
      }

      // Get client IP
      const forwarded = req.headers["x-forwarded-for"];
      const ip = forwarded
        ? forwarded.split(", ")[0]
        : req.socket.remoteAddress;

      // Get location data
      const locationData = await getLocationFromIp(ip);

      // Insert new message
      const { data, error } = await supabase
        .from("messages")
        .insert({
          message,
          name,
          ip_address: ip,
          location: locationData,
        })
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.error("Error in secreto API:", error);
      return res.status(500).json({ message: "Error saving message" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
