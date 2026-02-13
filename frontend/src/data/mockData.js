export const statCards = [
  { id: "due-today", label: "Due Today", count: 0, color: "gray" },
  { id: "due-tomorrow", label: "Due Tomorrow", count: 0, color: "gray" },
  { id: "due-7", label: "Due In 7 Days", count: 4, color: "green" },
  { id: "overdue-7", label: "Overdue Up to 7 days", count: 0, color: "gray" },
  { id: "overdue-long", label: "Overdue > 7 days", count: 217, color: "red" },
]

export const todoItems = {
  today: [
    {
      id: "t1",
      title: "Notice date",
      date: "20-Nov-2024",
      assignee: { name: "Janhvi Mathur", initials: "JM" },
      status: "pending",
    },
    {
      id: "t2",
      title: "Collect documents from client",
      date: "21-Jun-2024",
      assignee: { name: "Neha", initials: "N" },
      status: "in-progress",
    },
    {
      id: "t3",
      title: "Need Bank Statement",
      date: "20-Nov-2024",
      assignee: { name: "Mohan", initials: "M" },
      status: "pending",
    },
  ],
  upcoming: [
    {
      id: "u1",
      title: "GST Return Filing",
      date: "25-Feb-2025",
      assignee: { name: "Vikas", initials: "V" },
      status: "pending",
    },
    {
      id: "u2",
      title: "ITR Verification",
      date: "28-Feb-2025",
      assignee: { name: "Janhvi Mathur", initials: "JM" },
      status: "pending",
    },
  ],
  completed: [
    {
      id: "c1",
      title: "Tax Computation",
      date: "15-Jan-2025",
      assignee: { name: "Neha", initials: "N" },
      status: "completed",
    },
  ],
}

export const taskCategories = {
  pending: [
    { id: "tc1", name: "Abcd Loan", count: 1, progress: 25 },
    { id: "tc2", name: "Accounting", count: 9, progress: 40 },
    { id: "tc3", name: "Advance Tax", count: 5, progress: 60 },
    { id: "tc4", name: "GST Registration", count: 3, progress: 30 },
    { id: "tc5", name: "ITR", count: 72, progress: 45 },
    { id: "tc6", name: "KYC Doc.", count: 12, progress: 20 },
    { id: "tc7", name: "GST-3B (M)", count: 72, progress: 55 },
  ],
  hold: [
    { id: "th1", name: "Compliance", count: 15, progress: 10 },
    { id: "th2", name: "Audit", count: 8, progress: 25 },
  ],
  "in-progress": [
    { id: "ti1", name: "ITR Filing", count: 12, progress: 75 },
    { id: "ti2", name: "GST Return", count: 6, progress: 50 },
  ],
  completed: [
    { id: "td1", name: "Registration", count: 45, progress: 100 },
    { id: "td2", name: "Annual Return", count: 38, progress: 100 },
  ],
}

export const taskSummary = [
  { name: "Pending", value: 154, color: "#eab308" },
  { name: "Hold", value: 50, color: "#94a3b8" },
  { name: "In-Progress", value: 23, color: "#3b82f6" },
  { name: "Completed", value: 202, color: "#22c55e" },
]

export const performanceData = [
  { month: "Mar", value: 45 },
  { month: "Apr", value: 52 },
  { month: "May", value: 48 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 65 },
  { month: "Oct", value: 72 },
  { month: "Nov", value: 68 },
  { month: "Dec", value: 80 },
  { month: "Jan", value: 75 },
  { month: "Feb", value: 78 },
]

export const complianceDeadlines = [
  { id: "cd1", title: "GST 3B - November", dueDate: "20-Dec-2025", daysLeft: 8 },
  { id: "cd2", title: "TDS Return Q2", dueDate: "31-Jan-2026", daysLeft: 18 },
  { id: "cd3", title: "PF ECR", dueDate: "15-Feb-2026", daysLeft: 33 },
]

export const unbilledTasks = [
  { id: "ub1", client: "ABC Pvt Ltd", tasks: 3, amount: 45000 },
  { id: "ub2", client: "XYZ Corp", tasks: 2, amount: 28000 },
  { id: "ub3", client: "MNO Industries", tasks: 5, amount: 72000 },
]

export const bestPerformers = [
  { id: "bp1", name: "Janhvi Mathur", tasksCompleted: 42, avatar: "JM" },
  { id: "bp2", name: "Neha", tasksCompleted: 38, avatar: "N" },
  { id: "bp3", name: "Vikas", tasksCompleted: 35, avatar: "V" },
]

export const dashboardTimeStats = {
  avgTimeSpent: "1:46 Hours",
  subtitle: "Avg time spent to complete task in last 30 days.",
}

export const usefulLinks = [
  { id: "ul1", label: "Website Settings" },
  { id: "ul2", label: "Renew/Upgrade Plan" },
  { id: "ul3", label: "Buy SMS" },
  { id: "ul4", label: "WhatsApp API" },
  { id: "ul5", label: "Download Website Flyer" },
]

export const complianceCalendarEntries = [
  { id: "cc1", date: "20-05-2025", title: "GSTR 3B", subtitle: "Apr-25" },
  { id: "cc2", date: "30-05-2025", title: "Form 11", subtitle: "FY 2024-25" },
  { id: "cc3", date: "30-05-2025", title: "PAS-6", subtitle: "Oct-Mar 25" },
  { id: "cc4", date: "30-05-2025", title: "TCS (27D)", subtitle: "Jan-Mar 2025" },
  {
    id: "cc5",
    date: "31-05-2025",
    title: "TDS (24Q, 26Q, 27Q)",
    subtitle: "Jan-Mar 2025",
  },
  { id: "cc6", date: "07-06-2025", title: "TDS", subtitle: "May-25" },
]

export const upcomingHolidays = []
