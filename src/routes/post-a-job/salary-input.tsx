import { component$ } from "@builder.io/qwik";

export const SalaryInput = component$(() => {
  const salaryPeriod = [
    {
      name: "Hour",
      value: "hour",
    },
    {
      name: "Day",
      value: "day",
    },
    {
      name: "Week",
      value: "week",
    },
    {
      name: "Month",
      value: "month",
    },
    {
      name: "Year",
      value: "year",
    },
  ];
  const currency = [
    {
      name: "USD - US Dollar $",
      value: "USD",
    },
    {
      name: "EUR - Euro €",
      value: "EUR",
    },
    {
      name: "GBP - British Pound £",
      value: "GBP",
    },
    {
      name: "INR - Indian Rupee ₹",
      value: "INR",
    },
    {
      name: "AUD - Australian Dollars $",
      value: "AUD",
    },
    {
      name: "CAD - Canadian Dollars $",
      value: "CAD",
    },
    {
      name: "SEK - Swedish Kronor kr",
      value: "SEK",
    },
    {
      name: "PLN - Polish Zlotys (zł) zł",
      value: "PLN",
    },
  ];
  return (
    <div>
      <div class="label-text mt-2">Salary</div>
      <div class="join mt-2">
        <div>
          <select
            placeholder="Time Period"
            name="salaryPeriod"
            class="select select-bordered join-item w-full"
          >
            {salaryPeriod.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            placeholder="Currency"
            name="salaryCurrency"
            class="select select-bordered join-item w-full"
          >
            {currency.map(({ name, value }) => (
              <option key={name} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="from"
            name="salaryRangeFrom"
            id="salaryRangeFrom"
            class="input input-bordered join-item w-full"
            min={1}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="to"
            name="salaryRangeTo"
            id="salaryRangeTo"
            class="input input-bordered join-item w-full"
            min={1}
          />
        </div>
      </div>
    </div>
  );
});
