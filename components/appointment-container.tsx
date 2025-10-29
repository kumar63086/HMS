import React from "react";

import { getPatientById } from "@/utils/services/patient";

import { BookAppointment } from "./forms/book-appointment";
import { getDoctors } from "@/utils/services/doctor";

export const AppointmentContainer = async ({ id }: { id: string }) => {
  const { data } = await getPatientById(id);
  const { data: doctors } = await getDoctors();

  return (
    <div>
      <BookAppointment data={data!} doctors={doctors!} />
    </div>
  );
};