import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "react-toastify";

const eventFormSchema = z.object({
  firstName: z.string().nonempty("First Name is required."),
  lastName: z.string().nonempty("Last Name is required."),
  email: z.string().email("Email must be valid."),
  address: z.string().nonempty("Address is required."),
  phoneNumber: z.string().nonempty("Phone Number is required."),
  company: z.string().nonempty("Company is required."),
  contactPreference: z.enum(["phone", "email", "text"]),
  eventStyle: z.enum(["on_premise", "full_service_catering"]),
  natureOfEvent: z.enum(["Birthday", "Wedding", "Shower", "Others"]),
  eventDate: z.string().nonempty("Event Date is required."),
  startTime: z.string().nonempty("Start Time is required."),
  endTime: z.string().nonempty("End Time is required."),
  numberOfPeople: z.string(),
  additionalInfo: z.string().optional(),
  referralSource: z.enum([
    "EventUp",
    "Instagram",
    "Facebook",
    "Vanues_by_tripleseat",
    "SearchEngine",
    "email",
    "others",
  ]),
});

type EventFormType = z.infer<typeof eventFormSchema>;

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormType>({
    resolver: zodResolver(eventFormSchema),
  });

  const onSubmit = async (data: EventFormType) => {
    try {
      const html = ` <div>
      <h2>Event Details</h2>
      <p><strong>First Name:</strong> ${data.firstName}</p>
      <p><strong>Last Name:</strong> ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Contact Preference:</strong> ${data.contactPreference}</p>
      <p><strong>Event Style:</strong> ${data.eventStyle}</p>
      <p><strong>Nature of Event:</strong> ${data.natureOfEvent}</p>
      <p><strong>Event Date:</strong> ${data.eventDate}</p>
      <p><strong>Start Time:</strong> ${data.startTime}</p>
      <p><strong>End Time:</strong> ${data.endTime}</p>
      <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
      <p><strong>Additional Info:</strong> ${data.additionalInfo || "N/A"}</p>
      <p><strong>Referral Source:</strong> ${data.referralSource}</p>
  </div>`;
      const sendEmailData = {
        from: "Via Capri <cliente@viacapripizzas.com>",
        to: "alphamafood@gmail.com",
        subject: "Novo Cliente Solicitando Orcamento",
        html,
      };
      const res = await axios.post(
        "https://api-pizza.onrender.com/api/email",
        sendEmailData
      );
      console.log(res);
      toast.success("sucessfully sent");
    } catch {
      toast.error("an error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-4">
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          First Name
        </label>
        <input
          {...register("firstName")}
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.firstName?.message}</p>
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Last Name
        </label>
        <input
          {...register("lastName")}
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.lastName?.message}</p>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Email
        </label>
        <input
          {...register("email")}
          className="w-full p-2 mt-1 border rounded-md"
          type="email"
        />
        <p className="text-xs text-red-500">{errors.email?.message}</p>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Address
        </label>
        <input
          {...register("address")}
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.address?.message}</p>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Phone Number
        </label>
        <input
          {...register("phoneNumber")}
          className="w-full p-2 mt-1 border rounded-md"
          type="tel"
        />
        <p className="text-xs text-red-500">{errors.phoneNumber?.message}</p>
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Company
        </label>
        <input
          {...register("company")}
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.company?.message}</p>
      </div>

      {/* Contact Preference */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Contact Preference
        </label>
        <select
          {...register("contactPreference")}
          className="w-full p-2 mt-1 border rounded-md"
        >
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="text">Text</option>
        </select>
        <p className="text-xs text-red-500">
          {errors.contactPreference?.message}
        </p>
      </div>

      {/* Event Style */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Event Style
        </label>
        <select
          {...register("eventStyle")}
          className="w-full p-2 mt-1 border rounded-md"
        >
          <option value="on_premise">On Premise</option>
          <option value="full_service_catering">Full Service Catering</option>
        </select>
        <p className="text-xs text-red-500">{errors.eventStyle?.message}</p>
      </div>

      {/* Nature of Event */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Nature of this Event
        </label>
        <select
          {...register("natureOfEvent")}
          className="w-full p-2 mt-1 border rounded-md"
        >
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Shower">Shower</option>
          <option value="Others">Others</option>
        </select>
        <p className="text-xs text-red-500">{errors.natureOfEvent?.message}</p>
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Event Date
        </label>
        <input
          {...register("eventDate")}
          type="date"
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.eventDate?.message}</p>
      </div>

      {/* Start Time */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Start Time
        </label>
        <input
          {...register("startTime")}
          type="time"
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.startTime?.message}</p>
      </div>

      {/* End Time */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          End Time
        </label>
        <input
          {...register("endTime")}
          type="time"
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.endTime?.message}</p>
      </div>

      {/* Number of People */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Number of People
        </label>
        <input
          {...register("numberOfPeople")}
          type="number"
          className="w-full p-2 mt-1 border rounded-md"
        />
        <p className="text-xs text-red-500">{errors.numberOfPeople?.message}</p>
      </div>

      {/* Additional Info */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          Is there anything else you'd like to include?
        </label>
        <textarea
          {...register("additionalInfo")}
          className="w-full p-2 mt-1 border rounded-md"
          rows={3}
        ></textarea>
      </div>

      {/* Referral Source */}
      <div>
        <label className="block text-sm font-medium text-yellow-600">
          How did you hear about us?
        </label>
        <select
          {...register("referralSource")}
          className="w-full p-2 mt-1 border rounded-md"
        >
          <option value="EventUp">EventUp</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Vanues_by_tripleseat">Venues by Tripleseat</option>
          <option value="SearchEngine">Search Engine</option>
          <option value="email">Email</option>
          <option value="others">Others</option>
        </select>
        <p className="text-xs text-red-500">{errors.referralSource?.message}</p>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="px-4 py-2 text-white transition duration-300 bg-yellow-600 rounded hover:bg-yellow-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
