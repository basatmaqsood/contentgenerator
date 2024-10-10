import { create } from 'domain';
import {integer, varchar, pgTable, serial, text, timestamp, boolean} from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    stripeCustomerId: text('stripe_customer_id').unique(),
    email: text('email').notNull().unique(),
    name: text('name').notNull(),
    points : integer('points').default(50),
    createdAt: timestamp('created_at').notNull().defaultNow(),   
});

export const Subscriptions = pgTable('subscriptions', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => Users.id),
    stripeSubscriptionId: varchar('stripe_subscription_id',{
        length: 255
    }).unique(),
    plan : varchar('plan',{ length: 50}).notNull(),
    status : varchar('status',{ length: 50}).notNull(),
    currentPeriodStart : timestamp('current_period_start').notNull(), 
    currentPeriodEnd : timestamp('current_period_end').notNull(), 
    CancelAtPeriodEnd : boolean('cancel_at_period_end').default(false), 
});

export const generatedContent = pgTable('generated_content', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => Users.id),
    content: text('content').notNull(),
    prompt: text('prompt').notNull(),
    contentType: varchar('content_type',{ length: 50}).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),    
});