import { Home, Settings, User } from "lucide-react";
import React from "react";

export const menuItems = [
  {
    title: "Dashboard",
    id: 1,
    icon: React.createElement(Home, { size: 20 }),
  },
  {
    title: "Profile",
    id: 2,
    icon: React.createElement(User, { size: 20 }),
  },
  {
    title: "Settings",
    id: 3,
    icon: React.createElement(Settings, { size: 20 }),
  },
];

export const stats = [
  { title: "Courses Enrolled", value: 6, id: 1 },
  { title: "Assignments Due", value: 3, id: 2 },
  { title: "Messages", value: 12, id: 3 },
  { title: "Attendance", value: "92%", id: 4 },
];

export const userInfos = [
  {
    title: "User Info",
    userName: "Nwafor Ebuka",
    userDepartment: "Computer Science",
    userLevel: "400L",
    UserId: "NEA/CP/2025/001",
  },
];

export const activities = [
  {
    recentAct: "Submitted Assignment 3",
    id: 1,
  },
  {
    recentAct: "Checked Attendance Report",
    id: 2,
  },
  {
    recentAct: "Updated Profile Information",
    id: 3,
  },
  {
    recentAct: "Viewed Exam Timetable",
    id: 4,
  },
];

// Custom stats for Admin
export const adminStats = [
  { title: "Total Students", value: 1200 },
  { title: "Total Staff", value: 85 },
  { title: "Pending Approvals", value: 7 },
  { title: "System Alerts", value: 3 },
];

// Custom recent activities for Admin
export const adminActivities = [
  { recentActs: "Approved Student Enrollment" },
  { recentActs: "Reviewed Staff Leave Requests" },
  { recentActs: "Updated School Timetable" },
  { recentActs: "Generated Monthly Reports" },
];

// Custom stats for Staff
export const staffStats = [
  { title: "Courses Teaching", value: 5 },
  { title: "Pending Grading", value: 12 },
  { title: "Messages", value: 8 },
  { title: "Attendance Today", value: "95%" },
];

// Custom recent activities for Staff
export const staffActivities = [
  { recentAct1: "Uploaded Lecture Notes" },
  { recentAct1: "Graded Assignment 2" },
  { recentAct1: "Sent Message to Students" },
  { recentAct1: "Scheduled Class Meeting" },
];

// src/dashboard/data.js
export const dashboardData = {
  student: {
    stats: [
      { title: "Courses Enrolled", value: 6 },
      { title: "Assignments Due", value: 3 },
      { title: "Messages", value: 12 },
      { title: "Attendance", value: "92%" },
    ],
    activities: [
      { recentAct: "Submitted Assignment 3" },
      { recentAct: "Checked Attendance Report" },
      { recentAct: "Updated Profile Information" },
      { recentAct: "Viewed Exam Timetable" },
    ],
  },
  staff: {
    stats: [
      { title: "Courses Teaching", value: 5 },
      { title: "Pending Grading", value: 12 },
      { title: "Messages", value: 8 },
      { title: "Attendance Today", value: "95%" },
    ],
    activities: [
      { recentAct: "Uploaded Lecture Notes" },
      { recentAct: "Graded Assignment 2" },
      { recentAct: "Sent Message to Students" },
      { recentAct: "Scheduled Class Meeting" },
    ],
  },
  admin: {
    stats: [
      { title: "Total Students", value: 1200 },
      { title: "Total Staff", value: 85 },
      { title: "Pending Approvals", value: 7 },
      { title: "System Alerts", value: 3 },
    ],
    activities: [
      { recentAct: "Approved Student Enrollment" },
      { recentAct: "Reviewed Staff Leave Requests" },
      { recentAct: "Updated School Timetable" },
      { recentAct: "Generated Monthly Reports" },
    ],
  },
};
