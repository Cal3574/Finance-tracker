"use client";

import { useState, useEffect } from "react";
import { monthNames } from "../constants/dates";
import { useSession } from "next-auth/react";

export function useHandleMonth({ userSpends }: { userSpends: any }) {
  const { data: session } = useSession();

  console.log(session);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [monthName, setMonthName] = useState<string>(monthNames[selectedMonth]);
  const [spends, setSpends] = useState<any>([]);
  const [totalSpends, setTotalSpends] = useState<number>(0);

  const getMonthName = (selectedMonth: number) => {
    return monthNames[selectedMonth];
  };

  const handleMonthChange = (month: string) => {
    const monthIndex = monthNames.indexOf(month);
    setMonthName(month);
    setSelectedMonth(monthIndex);
  };

  useEffect(() => {
    if (userSpends && session) {
      const filteredSpends = userSpends.filter((item: any) => {
        const date = new Date(item.createdAt);
        const month = getMonthName(date.getMonth());
        return month === monthName;
      });

      const totalSpends = filteredSpends.reduce((acc: number, item: any) => {
        return acc + item.amount;
      }, 0);

      console.log(totalSpends);
      setSpends(filteredSpends);
      setTotalSpends(totalSpends);
    }
  }, [monthName, userSpends, session]);

  return {
    selectedMonth,
    setSelectedMonth,
    monthName,
    handleMonthChange,
    getMonthName,
    spends,
    setSpends,
    totalSpends,
  };
}
