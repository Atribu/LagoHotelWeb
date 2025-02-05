"use client"

import ArrawDown from "@/app/HomePage/Components/Icons/ArrawDown"
import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Reservation() {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [showGuests, setShowGuests] = useState(false)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [guestInfo, setGuestInfo] = useState({})

  useEffect(() => {
    setGuestInfo({ checkInDate, checkOutDate, adults, children })
  }, [checkInDate, checkOutDate, adults, children])

  useEffect(() => {
    console.log("Guest Information:", guestInfo)
  }, [guestInfo])

  const toggleGuestsDropdown = () => setShowGuests((prev) => !prev)

  const incrementAdults = () => setAdults(adults + 1)
  const decrementAdults = () => adults > 0 && setAdults(adults - 1)

  const incrementChildren = () => setChildren(children + 1)
  const decrementChildren = () => children > 0 && setChildren(children - 1)

  return (
    <section
      /* 
        1) absolute, top-0 + z-20 => videonun ve diğer öğelerin üstünde yer alabilir
        2) bg-[#1D1D1B] + bg-opacity-50 => header ile aynı renk ve opacity
        3) istediğin kadar top değeri verebilirsin (ör. top-[100px]) 
      */
      className="
        absolute 
        bottom-0  
        left-0 
        w-screen 
        h-auto 
        z-20
        flex 
        items-center 
        justify-center
        bg-[#1D1D1B] 
        bg-opacity-50
      "
      aria-labelledby="reservation-heading"
    >
      {/* Ekran okuyucu kullanıcılar için (opsiyonel) */}
      {/* <h2 id="reservation-heading" className="sr-only">Reservation Form</h2> */}

      <form
        className="
          lg:flex 
          lg:flex-row 
          grid 
          grid-cols-2 
          w-[90%] 
          lg:w-[80%]
          items-center 
          h-auto
          max-h-content
          justify-center 
          text-[#ffff] 
          font-monserrat 
          font-light 
          text-[15px] 
          lg:text-[20px] 
          leading-normal 
          text-center
         
        "
      >
        <div>
          <p className="uppercase text-[16px] text-white text-center font-jost font-medium leading-[24px]">
            Book your perfect stay
          </p>
        </div>

        {/* İnce çizgi */}
        <div className="w-[1px] h-[11px] bg-white" />

        {/* CHECK-IN */}
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <label htmlFor="checkInDate" className="sr-only text-white">
            Check In
          </label>
          <DatePicker
            id="checkInDate"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check In"
            className="
              cursor-pointer 
              lg:px-[2vw] 
              py-[30px] 
              
              w-[45vw] 
              lg:w-auto 
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-center 
               placeholder:text-white
              placeholder:uppercase
              placeholder:text-[16px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-jost
            "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <ArrawDown className="absolute right-3" width={12} height={12} />
        </div>

        {/* CHECK-OUT */}
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          <label htmlFor="checkOutDate" className="sr-only">
            Check Out
          </label>
          <DatePicker
            id="checkOutDate"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check Out"
            className="
              cursor-pointer 
              px-[2vw] 
              py-[30px] 
              w-[45vw] 
              lg:w-auto 
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-center 
              placeholder:text-white
              placeholder:uppercase
              placeholder:text-[16px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-jost
            "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <ArrawDown className="absolute right-3" width={12} height={12} />
        </div>

        {/* GUESTS */}
        <div className="relative">
          <label htmlFor="guests-button" className="sr-only">
            Select number of guests
          </label>
          <button
            id="guests-button"
            onClick={toggleGuestsDropdown}
            className="
              cursor-pointer
              px-[3vw] 
              py-[30px] 
              w-full 
              text-customGray
              bg-transparent
              focus:outline-none
              text-center
              relative
               placeholder:text-white
              uppercase
             text-[16px]
              leading-[24px]
              font-medium
              font-jost
            "
            aria-haspopup="dialog"
            aria-expanded={showGuests}
            type="button"
          >
            Guests
          </button>

          {showGuests && (
            <div
              className="
                absolute 
                top-full 
                left-0 
                mt-2 
                bg-transparent 
                border 
                border-gray-300 
                text-[#ffff] 
                text-[14px] 
                font-semibold 
                rounded-lg 
                shadow-lg 
                w-full 
                min-w-[180px] 
                p-3 
                xl:p-4
              "
              role="dialog"
              aria-modal="false"
              aria-label="Select number of adults and children"
            >
              {/* Adults */}
              <div className="flex justify-between items-center mb-3">
                <label
                  htmlFor="adultCounter"
                  id="adultCounterLabel"
                  className="whitespace-nowrap"
                >
                  Adult(s)
                </label>
                <div className="flex items-center gap-1 lg:gap-2" id="adultCounter">
                  <button
                    onClick={decrementAdults}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="adultCounterLabel"
                    aria-label="Decrease adults"
                    type="button"
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="adultCounterLabel"
                    aria-label="Increase adults"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center">
                <label
                  htmlFor="childrenCounter"
                  id="childrenCounterLabel"
                  className="whitespace-nowrap"
                >
                  Child(ren)
                </label>
                <div className="flex items-center gap-1 lg:gap-2" id="childrenCounter">
                  <button
                    onClick={decrementChildren}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Decrease children"
                    type="button"
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={incrementChildren}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Increase children"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => console.log("Final Guest Information:", guestInfo)}
          className="
            cursor-pointer 
            border 
            px-[47px] 
            py-[12px] 
            border-white
            text-white
            lg:max-w-[304px] 
            whitespace-nowrap
            text-[16px]
            font-medium
            uppercase
            font-jost
            text-center 
            justify-center
            items-center
            bg-transparent
          "
          type="button"
        >
          Search
        </button>
      </form>
    </section>
  )
}
