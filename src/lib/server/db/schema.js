import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const websites = sqliteTable("websites", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  domain: text("domain").notNull(),
  created_at: integer("created_at").notNull(),
});

export const visits = sqliteTable("visits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  website_id: integer("website_id")
    .notNull()
    .references(() => websites.id), // <-- foreign key to websites.id
  created_at: integer("created_at").notNull(),
  domain: text("domain").notNull(),
  country: text("country").notNull(),
  referrer: text("referrer").notNull(),
  device: text("device").notNull(),
  browser: text("browser").notNull(),
  os: text("os").notNull(),
});
