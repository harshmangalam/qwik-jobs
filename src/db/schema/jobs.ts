import {
  boolean,
  integer,
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const jobTypeEnum = pgEnum("job_type", [
  "fulltime",
  "parttime",
  "internship",
  "freelance",
  "contract",
]);
const experienceLevel = pgEnum("seniority_level", [
  "lead",
  "senior",
  "medium",
  "junior",
]);
const employmentModel = pgEnum("employment_model", [
  "onsite",
  "remote",
  "hybrid",
]);
const salaryTypeEnum = pgEnum("salary_type", [
  "hour",
  "day",
  "week",
  "month",
  "year",
]);

export const jobs = pgTable("jobs", {
  id: uuid("id").primaryKey(),
  title: varchar("title", { length: 40 }),
  employmentModel: employmentModel("employment_model"),
  experienceLevel: experienceLevel("experience_level"),
  description: text("description"),
  jobType: jobTypeEnum("job_type"),
  locations: text("locations").array(),
  salaryType: salaryTypeEnum("salary_type"),
  salaryCurrency: salaryTypeEnum("salary_currency"),
  salaryRangeFrom: integer("salary_range_from"),
  salaryRangeTo: integer("salary_range_to"),
  applyTarget: text("apply_text"),
  isFeatured: boolean("is_featured").default(false),
  payment: json("payment"),
  isPaymentDone: boolean("is_payment_done").default(false),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
