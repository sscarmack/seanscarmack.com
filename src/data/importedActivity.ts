import type { Expense, Payment } from "../types";

export type ImportedJobActivity = {
  orderNumber: string;
  payments: Payment[];
  expenses: Array<Omit<Expense, "jobId">>;
};

export const importedJobActivity: ImportedJobActivity[] = [
  {
    "orderNumber": "1",
    "payments": [
      {
        "id": "sql-payment-order-1",
        "date": "2014-05-24",
        "method": "PayPal - instant",
        "reference": "2ME110048W350104J",
        "amount": 27.45
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-14",
        "date": "2014-05-24",
        "description": "Order #1 expense",
        "amount": 1.1,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "2",
    "payments": [
      {
        "id": "sql-payment-order-2",
        "date": "2014-05-28",
        "method": "Offline",
        "reference": "Offline",
        "amount": 32.86
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "3",
    "payments": [
      {
        "id": "sql-payment-order-3",
        "date": "2014-06-04",
        "method": "Offline",
        "reference": "Offline",
        "amount": 121.9
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "5",
    "payments": [
      {
        "id": "sql-payment-order-5",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 25.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "6",
    "payments": [
      {
        "id": "sql-payment-order-6",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "7",
    "payments": [
      {
        "id": "sql-payment-order-7",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 30.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "8",
    "payments": [
      {
        "id": "sql-payment-order-8",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "9",
    "payments": [
      {
        "id": "sql-payment-order-9",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "10",
    "payments": [
      {
        "id": "sql-payment-order-10",
        "date": "2014-06-02",
        "method": "Cash",
        "reference": "",
        "amount": 24.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "11",
    "payments": [
      {
        "id": "sql-payment-order-11",
        "date": "2014-06-03",
        "method": "Cash",
        "reference": "",
        "amount": 12.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "12",
    "payments": [
      {
        "id": "sql-payment-order-12",
        "date": "2014-06-03",
        "method": "Check",
        "reference": "",
        "amount": 30.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "13",
    "payments": [
      {
        "id": "sql-payment-order-13",
        "date": "2014-06-03",
        "method": "Cash",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "14",
    "payments": [
      {
        "id": "sql-payment-order-14",
        "date": "2014-06-03",
        "method": "Cash",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "15",
    "payments": [
      {
        "id": "sql-payment-order-15",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "16",
    "payments": [
      {
        "id": "sql-payment-order-16",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "17",
    "payments": [
      {
        "id": "sql-payment-order-17",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 17.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "18",
    "payments": [
      {
        "id": "sql-payment-order-18",
        "date": "2014-06-03",
        "method": "Cash",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "19",
    "payments": [
      {
        "id": "sql-payment-order-19",
        "date": "2014-06-02",
        "method": "Cash",
        "reference": "",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "20",
    "payments": [
      {
        "id": "sql-payment-order-20",
        "date": "2014-06-03",
        "method": "Cash",
        "reference": "",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "21",
    "payments": [
      {
        "id": "sql-payment-order-21",
        "date": "2014-06-02",
        "method": "Cash",
        "reference": "",
        "amount": 32.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "22",
    "payments": [
      {
        "id": "sql-payment-order-22",
        "date": "2014-06-02",
        "method": "Cash",
        "reference": "",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "23",
    "payments": [
      {
        "id": "sql-payment-order-23",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 24.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "24",
    "payments": [
      {
        "id": "sql-payment-order-24",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 19.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "25",
    "payments": [
      {
        "id": "sql-payment-order-25",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "26",
    "payments": [
      {
        "id": "sql-payment-order-26",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "27",
    "payments": [
      {
        "id": "sql-payment-order-27",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "28",
    "payments": [
      {
        "id": "sql-payment-order-28",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 17.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "29",
    "payments": [
      {
        "id": "sql-payment-order-29",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 19.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "30",
    "payments": [
      {
        "id": "sql-payment-order-30",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 17.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "31",
    "payments": [
      {
        "id": "sql-payment-order-31",
        "date": "2014-06-02",
        "method": "Check",
        "reference": "",
        "amount": 24.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "32",
    "payments": [
      {
        "id": "sql-payment-order-32",
        "date": "2014-06-03",
        "method": "PayPal - instant",
        "reference": "4NL743994E282290D",
        "amount": 62.01
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-15",
        "date": "2014-06-03",
        "description": "Order #32 expense",
        "amount": 2.1,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "33",
    "payments": [
      {
        "id": "sql-payment-order-33",
        "date": "2014-05-28",
        "method": "Cash",
        "reference": "",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "35",
    "payments": [
      {
        "id": "sql-payment-order-35",
        "date": "2014-05-01",
        "method": "Check",
        "reference": "",
        "amount": 2000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "38",
    "payments": [
      {
        "id": "sql-payment-order-38",
        "date": "2014-06-11",
        "method": "Cash",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "39",
    "payments": [
      {
        "id": "sql-payment-order-39",
        "date": "2014-06-11",
        "method": "Check",
        "reference": "",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "40",
    "payments": [
      {
        "id": "sql-payment-order-40",
        "date": "2014-06-11",
        "method": "Check",
        "reference": "",
        "amount": 12.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "41",
    "payments": [
      {
        "id": "sql-payment-order-41",
        "date": "2014-06-11",
        "method": "Check",
        "reference": "",
        "amount": 63.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "42",
    "payments": [
      {
        "id": "sql-payment-order-42",
        "date": "2014-06-11",
        "method": "Check",
        "reference": "",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "43",
    "payments": [
      {
        "id": "sql-payment-order-43",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "44",
    "payments": [
      {
        "id": "sql-payment-order-44",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "45",
    "payments": [
      {
        "id": "sql-payment-order-45",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "46",
    "payments": [
      {
        "id": "sql-payment-order-46",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "47",
    "payments": [
      {
        "id": "sql-payment-order-47",
        "date": "2014-06-13",
        "method": "Cash",
        "reference": "",
        "amount": 25.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "48",
    "payments": [
      {
        "id": "sql-payment-order-48",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 35.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "49",
    "payments": [
      {
        "id": "sql-payment-order-49",
        "date": "2014-06-13",
        "method": "Check",
        "reference": "",
        "amount": 15.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "50",
    "payments": [
      {
        "id": "sql-payment-order-50",
        "date": "2014-06-23",
        "method": "Offline",
        "reference": "Offline",
        "amount": 25.44
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "51",
    "payments": [
      {
        "id": "sql-payment-order-51",
        "date": "2014-06-23",
        "method": "Check",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "53",
    "payments": [
      {
        "id": "sql-payment-order-53",
        "date": "2014-07-07",
        "method": "PayPal - instant",
        "reference": "3B069449UV8511708",
        "amount": 8.48
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-24",
        "date": "2014-07-07",
        "description": "Order #53 expense",
        "amount": 0.55,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "54",
    "payments": [
      {
        "id": "sql-payment-order-54",
        "date": "2014-07-10",
        "method": "Check",
        "reference": "",
        "amount": 750.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "55",
    "payments": [
      {
        "id": "sql-payment-order-55",
        "date": "2014-08-05",
        "method": "Offline",
        "reference": "Offline",
        "amount": 41.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "56",
    "payments": [
      {
        "id": "sql-payment-order-56",
        "date": "2014-07-22",
        "method": "PayPal - instant",
        "reference": "5VB436299F558422B",
        "amount": 117.66
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-26",
        "date": "2014-07-21",
        "description": "Order #56 expense",
        "amount": 3.71,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "57",
    "payments": [
      {
        "id": "sql-payment-order-57",
        "date": "2014-07-24",
        "method": "Check",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "58",
    "payments": [
      {
        "id": "sql-payment-order-58",
        "date": "2014-08-01",
        "method": "Check",
        "reference": "",
        "amount": 400.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "60",
    "payments": [
      {
        "id": "sql-payment-order-60",
        "date": "2014-08-13",
        "method": "Check",
        "reference": "",
        "amount": 490.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "61",
    "payments": [
      {
        "id": "sql-payment-order-61",
        "date": "2014-08-13",
        "method": "Check",
        "reference": "",
        "amount": 650.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "62",
    "payments": [
      {
        "id": "sql-payment-order-62",
        "date": "2014-08-20",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "64",
    "payments": [
      {
        "id": "sql-payment-order-64",
        "date": "2014-09-30",
        "method": "Check",
        "reference": "",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "65",
    "payments": [
      {
        "id": "sql-payment-order-65",
        "date": "2014-09-18",
        "method": "Check",
        "reference": "",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "67",
    "payments": [
      {
        "id": "sql-payment-order-67",
        "date": "2014-10-13",
        "method": "Check",
        "reference": "",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "68",
    "payments": [
      {
        "id": "sql-payment-order-68",
        "date": "2014-10-13",
        "method": "Check",
        "reference": "",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "69",
    "payments": [
      {
        "id": "sql-payment-order-69",
        "date": "2014-10-13",
        "method": "Check",
        "reference": "",
        "amount": 875.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "70",
    "payments": [
      {
        "id": "sql-payment-order-70",
        "date": "2014-10-16",
        "method": "Check",
        "reference": "",
        "amount": 700.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "71",
    "payments": [
      {
        "id": "sql-payment-order-71",
        "date": "2014-10-19",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "75",
    "payments": [
      {
        "id": "sql-payment-order-75",
        "date": "2014-11-24",
        "method": "PayPal - instant",
        "reference": "22R05674F4980310K",
        "amount": 12.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-30",
        "date": "2014-11-24",
        "description": "Order #75 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "77",
    "payments": [
      {
        "id": "sql-payment-order-77",
        "date": "2015-01-26",
        "method": "Offline",
        "reference": "Offline",
        "amount": 101.76
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "84",
    "payments": [
      {
        "id": "sql-payment-order-84",
        "date": "2015-06-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "88",
    "payments": [
      {
        "id": "sql-payment-order-88",
        "date": "2015-06-05",
        "method": "Cash",
        "reference": "",
        "amount": 429.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "89",
    "payments": [
      {
        "id": "sql-payment-order-89",
        "date": "2015-03-30",
        "method": "Cash/Check",
        "reference": "",
        "amount": 318.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "90",
    "payments": [
      {
        "id": "sql-payment-order-90",
        "date": "2015-06-10",
        "method": "PayPal - instant",
        "reference": "3YD582988U6594020",
        "amount": 23.02
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-32",
        "date": "2015-06-10",
        "description": "Order #90 expense",
        "amount": 0.97,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "92",
    "payments": [
      {
        "id": "sql-payment-order-92",
        "date": "2015-06-17",
        "method": "Check",
        "reference": "",
        "amount": 148.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "93",
    "payments": [
      {
        "id": "sql-payment-order-93",
        "date": "2015-06-19",
        "method": "Check",
        "reference": "",
        "amount": 175.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "94",
    "payments": [
      {
        "id": "sql-payment-order-94",
        "date": "2015-07-01",
        "method": "Check",
        "reference": "",
        "amount": 156.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "95",
    "payments": [
      {
        "id": "sql-payment-order-95",
        "date": "2015-07-05",
        "method": "PayPal - instant",
        "reference": "0A662482TF523700W",
        "amount": 78.97
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-35",
        "date": "2015-07-05",
        "description": "Order #95 expense",
        "amount": 2.59,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "96",
    "payments": [
      {
        "id": "sql-payment-order-96",
        "date": "2015-07-07",
        "method": "Check",
        "reference": "",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "97",
    "payments": [
      {
        "id": "sql-payment-order-97",
        "date": "2015-07-17",
        "method": "Check",
        "reference": "Offline",
        "amount": 1100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "98",
    "payments": [
      {
        "id": "sql-payment-order-98",
        "date": "2015-07-27",
        "method": "Cash",
        "reference": "",
        "amount": 700.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "99",
    "payments": [
      {
        "id": "sql-payment-order-99",
        "date": "2015-09-11",
        "method": "Check",
        "reference": "Offline",
        "amount": 800.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "101",
    "payments": [
      {
        "id": "sql-payment-order-101",
        "date": "2015-09-05",
        "method": "Cash",
        "reference": "",
        "amount": 660.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "102",
    "payments": [
      {
        "id": "sql-payment-order-102",
        "date": "2015-09-19",
        "method": "Check",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "103",
    "payments": [
      {
        "id": "sql-payment-order-103",
        "date": "2015-09-20",
        "method": "Check",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "104",
    "payments": [
      {
        "id": "sql-payment-order-104",
        "date": "2015-10-28",
        "method": "Check",
        "reference": "Offline",
        "amount": 35.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "107",
    "payments": [
      {
        "id": "sql-payment-order-107",
        "date": "2016-08-20",
        "method": "Cash",
        "reference": "Offline",
        "amount": 500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "108",
    "payments": [
      {
        "id": "sql-payment-order-108",
        "date": "2015-11-05",
        "method": "Check",
        "reference": "",
        "amount": 650.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "109",
    "payments": [
      {
        "id": "sql-payment-order-109",
        "date": "2017-03-27",
        "method": "Offline",
        "reference": "Offline",
        "amount": 650.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "110",
    "payments": [
      {
        "id": "sql-payment-order-110",
        "date": "2015-12-04",
        "method": "PayPal - instant",
        "reference": "0F471708MF529502S",
        "amount": 44.52
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-36",
        "date": "2015-12-04",
        "description": "Order #110 expense",
        "amount": 1.59,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "112",
    "payments": [
      {
        "id": "sql-payment-order-112",
        "date": "2016-04-11",
        "method": "PayPal - instant",
        "reference": "7NW89271S47800824",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-37",
        "date": "2016-04-11",
        "description": "Order #112 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "114",
    "payments": [
      {
        "id": "sql-payment-order-114",
        "date": "2016-11-20",
        "method": "PayPal - instant",
        "reference": "4FE73187CA1295509",
        "amount": 157.94
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-38",
        "date": "2016-11-20",
        "description": "Order #114 expense",
        "amount": 4.88,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "117",
    "payments": [
      {
        "id": "sql-payment-order-117",
        "date": "2017-09-17",
        "method": "Check",
        "reference": "Offline",
        "amount": 650.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "118",
    "payments": [
      {
        "id": "sql-payment-order-118",
        "date": "2018-02-23",
        "method": "Check",
        "reference": "Offline",
        "amount": 1500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "119",
    "payments": [
      {
        "id": "sql-payment-order-119",
        "date": "2017-03-27",
        "method": "Offline",
        "reference": "Offline",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "120",
    "payments": [
      {
        "id": "sql-payment-order-120",
        "date": "2017-09-18",
        "method": "Check",
        "reference": "Offline",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "121",
    "payments": [
      {
        "id": "sql-payment-order-121",
        "date": "2017-06-28",
        "method": "Offline",
        "reference": "Offline",
        "amount": 750.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "122",
    "payments": [
      {
        "id": "sql-payment-order-122",
        "date": "2017-09-15",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "125",
    "payments": [
      {
        "id": "sql-payment-order-125",
        "date": "2018-10-03",
        "method": "PayPal",
        "reference": "7N4239923N6236918",
        "amount": 1250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-39",
        "date": "2018-02-08",
        "description": "Order #125 expense",
        "amount": 13.35,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "126",
    "payments": [
      {
        "id": "sql-payment-order-126",
        "date": "2018-06-20",
        "method": "Cash",
        "reference": "Offline",
        "amount": 600.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "127",
    "payments": [
      {
        "id": "sql-payment-order-127",
        "date": "2018-08-04",
        "method": "Check",
        "reference": "",
        "amount": 1250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "128",
    "payments": [
      {
        "id": "sql-payment-order-128",
        "date": "2018-06-11",
        "method": "Cash",
        "reference": "",
        "amount": 850.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "129",
    "payments": [
      {
        "id": "sql-payment-order-129",
        "date": "2018-05-26",
        "method": "Cash",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "130",
    "payments": [
      {
        "id": "sql-payment-order-130",
        "date": "2018-09-10",
        "method": "Check",
        "reference": "",
        "amount": 1500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "131",
    "payments": [
      {
        "id": "sql-payment-order-131",
        "date": "2018-05-29",
        "method": "PayPal - instant",
        "reference": "4TH25232LL168252K",
        "amount": 3.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-40",
        "date": "2018-05-29",
        "description": "Order #131 expense",
        "amount": 0.39,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "132",
    "payments": [
      {
        "id": "sql-payment-order-132",
        "date": "2019-07-20",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "133",
    "payments": [
      {
        "id": "sql-payment-order-133",
        "date": "2018-09-05",
        "method": "Check",
        "reference": "",
        "amount": 825.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "134",
    "payments": [
      {
        "id": "sql-payment-order-134",
        "date": "2018-08-22",
        "method": "Cash",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "143",
    "payments": [
      {
        "id": "sql-payment-order-143",
        "date": "2019-03-26",
        "method": "Cash",
        "reference": "",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "144",
    "payments": [
      {
        "id": "sql-payment-order-144",
        "date": "2018-10-06",
        "method": "Cash",
        "reference": "",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "145",
    "payments": [
      {
        "id": "sql-payment-order-145",
        "date": "2019-07-06",
        "method": "Cash",
        "reference": "",
        "amount": 1700.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "146",
    "payments": [
      {
        "id": "sql-payment-order-146",
        "date": "2019-11-02",
        "method": "Cash",
        "reference": "",
        "amount": 3000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "147",
    "payments": [
      {
        "id": "sql-payment-order-147",
        "date": "2019-07-13",
        "method": "Cash",
        "reference": "",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "148",
    "payments": [
      {
        "id": "sql-payment-order-148",
        "date": "2019-10-05",
        "method": "cash",
        "reference": "",
        "amount": 2500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "149",
    "payments": [
      {
        "id": "sql-payment-order-149",
        "date": "2019-06-21",
        "method": "Check",
        "reference": "",
        "amount": 2200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "153",
    "payments": [
      {
        "id": "sql-payment-order-153",
        "date": "2019-06-27",
        "method": "Check",
        "reference": "7D747873604393331",
        "amount": 2200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-41",
        "date": "2018-11-05",
        "description": "Order #153 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "154",
    "payments": [
      {
        "id": "sql-payment-order-154",
        "date": "2019-09-21",
        "method": "Check",
        "reference": "Offline",
        "amount": 2300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "155",
    "payments": [
      {
        "id": "sql-payment-order-155",
        "date": "2019-11-03",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 1320.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "156",
    "payments": [
      {
        "id": "sql-payment-order-156",
        "date": "2019-01-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "157",
    "payments": [
      {
        "id": "sql-payment-order-157",
        "date": "2019-06-04",
        "method": "Offline",
        "reference": "Offline",
        "amount": 2100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "158",
    "payments": [
      {
        "id": "sql-payment-order-158",
        "date": "2019-01-03",
        "method": "PayPal - instant",
        "reference": "2C786366983362305",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-42",
        "date": "2019-01-03",
        "description": "Order #158 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "159",
    "payments": [
      {
        "id": "sql-payment-order-159",
        "date": "2019-11-09",
        "method": "Cash",
        "reference": "6T481010GM864602H",
        "amount": 1550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-43",
        "date": "2019-01-19",
        "description": "Order #159 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "160",
    "payments": [
      {
        "id": "sql-payment-order-160",
        "date": "2019-08-16",
        "method": "Check",
        "reference": "10500",
        "amount": 1450.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "162",
    "payments": [
      {
        "id": "sql-payment-order-162",
        "date": "2019-05-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1750.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "163",
    "payments": [
      {
        "id": "sql-payment-order-163",
        "date": "2019-05-17",
        "method": "check",
        "reference": "Offline",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "164",
    "payments": [
      {
        "id": "sql-payment-order-164",
        "date": "2019-01-22",
        "method": "PayPal - instant",
        "reference": "2YJ74079NV132680D",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-44",
        "date": "2019-01-22",
        "description": "Order #164 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "165",
    "payments": [
      {
        "id": "sql-payment-order-165",
        "date": "2019-06-01",
        "method": "Check",
        "reference": "Offline",
        "amount": 600.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "166",
    "payments": [
      {
        "id": "sql-payment-order-166",
        "date": "2019-03-11",
        "method": "Check",
        "reference": "Offline",
        "amount": 400.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "167",
    "payments": [
      {
        "id": "sql-payment-order-167",
        "date": "2021-09-18",
        "method": "Cash",
        "reference": "Offline",
        "amount": 2650.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-308",
        "date": "2021-09-18",
        "description": "Jess - Cash",
        "amount": 1300.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "171",
    "payments": [
      {
        "id": "sql-payment-order-171",
        "date": "2019-04-25",
        "method": "Venmo",
        "reference": "",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "172",
    "payments": [
      {
        "id": "sql-payment-order-172",
        "date": "2019-07-25",
        "method": "cash",
        "reference": "6UR9730009892500K",
        "amount": 1250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-45",
        "date": "2019-04-14",
        "description": "Order #172 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "173",
    "payments": [
      {
        "id": "sql-payment-order-173",
        "date": "2019-05-04",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "174",
    "payments": [
      {
        "id": "sql-payment-order-174",
        "date": "2019-08-08",
        "method": "PayPal",
        "reference": "0BG4830439731674G",
        "amount": 1650.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-46",
        "date": "2019-05-05",
        "description": "Order #174 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "175",
    "payments": [
      {
        "id": "sql-payment-order-175",
        "date": "2020-09-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "176",
    "payments": [
      {
        "id": "sql-payment-schedule-68",
        "date": "2019-09-15",
        "method": "Check",
        "reference": "",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-69",
        "date": "2021-06-28",
        "method": "Venmo",
        "reference": "",
        "amount": 1500.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-295",
        "date": "2021-06-28",
        "description": "Jess",
        "amount": 750.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "177",
    "payments": [
      {
        "id": "sql-payment-order-177",
        "date": "2020-10-24",
        "method": "Cash",
        "reference": "",
        "amount": 3430.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-82",
        "date": "2020-10-29",
        "description": "Jess - Lineberger Wedding",
        "amount": 1750.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "179",
    "payments": [
      {
        "id": "sql-payment-order-179",
        "date": "2020-12-20",
        "method": "Check",
        "reference": "Offline",
        "amount": 1900.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-81",
        "date": "2020-09-27",
        "description": "Jess - Davis Wedding - $1,000 + iPad Pro",
        "amount": 1000.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "180",
    "payments": [
      {
        "id": "sql-payment-order-180",
        "date": "2020-07-31",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 2100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "182",
    "payments": [
      {
        "id": "sql-payment-order-182",
        "date": "2019-10-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "184",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-47",
        "date": "2019-08-21",
        "description": "Order #184 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "186",
    "payments": [
      {
        "id": "sql-payment-order-186",
        "date": "2019-08-29",
        "method": "PayPal - instant",
        "reference": "4FR15368XR616551V",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-48",
        "date": "2019-08-29",
        "description": "Order #186 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "187",
    "payments": [
      {
        "id": "sql-payment-order-187",
        "date": "2019-09-01",
        "method": "PayPal - instant",
        "reference": "0YT8706100535533J",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-49",
        "date": "2019-09-01",
        "description": "Order #187 expense",
        "amount": 1.75,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "189",
    "payments": [
      {
        "id": "sql-payment-order-189",
        "date": "2019-09-03",
        "method": "PayPal - instant",
        "reference": "0V735271UH732051C",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-50",
        "date": "2019-09-03",
        "description": "Order #189 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "191",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-51",
        "date": "2019-09-12",
        "description": "Order #191 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "192",
    "payments": [
      {
        "id": "sql-payment-order-192",
        "date": "2019-09-12",
        "method": "PayPal - instant",
        "reference": "3XK40140JU876761J",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-52",
        "date": "2019-09-12",
        "description": "Order #192 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "193",
    "payments": [
      {
        "id": "sql-payment-order-193",
        "date": "2019-09-18",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "195",
    "payments": [
      {
        "id": "sql-payment-order-195",
        "date": "2019-09-18",
        "method": "PayPal - instant",
        "reference": "14C66548M24327626",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-53",
        "date": "2019-09-18",
        "description": "Order #195 expense",
        "amount": 1.75,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "196",
    "payments": [
      {
        "id": "sql-payment-order-196",
        "date": "2020-10-17",
        "method": "Cash",
        "reference": "40P3824761597805Y",
        "amount": 2391.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-54",
        "date": "2019-09-18",
        "description": "Order #196 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-87",
        "date": "2020-10-17",
        "description": "Jess - Scheiber Wedding",
        "amount": 2391.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "197",
    "payments": [
      {
        "id": "sql-payment-order-197",
        "date": "2019-09-20",
        "method": "PayPal",
        "reference": "1KW27467E2308973U",
        "amount": 225.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "201",
    "payments": [
      {
        "id": "sql-payment-order-201",
        "date": "2020-08-28",
        "method": "Check",
        "reference": "1UF75036639389335",
        "amount": 4617.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-55",
        "date": "2019-09-28",
        "description": "Order #201 expense",
        "amount": 3.2,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-75",
        "date": "2020-08-31",
        "description": "Jess - Mannion Wedding",
        "amount": 1875.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "202",
    "payments": [
      {
        "id": "sql-payment-order-202",
        "date": "2019-11-10",
        "method": "Cash",
        "reference": "7T768049ME1756122",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-56",
        "date": "2019-09-30",
        "description": "Order #202 expense",
        "amount": 1.75,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "205",
    "payments": [
      {
        "id": "sql-payment-order-205",
        "date": "2019-10-29",
        "method": "Check",
        "reference": "",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "206",
    "payments": [
      {
        "id": "sql-payment-order-206",
        "date": "2019-10-24",
        "method": "Cash",
        "reference": "Offline",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "207",
    "payments": [
      {
        "id": "sql-payment-order-207",
        "date": "2019-10-01",
        "method": "PayPal - instant",
        "reference": "8A839992UC577314Y",
        "amount": 75.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-57",
        "date": "2019-10-01",
        "description": "Order #207 expense",
        "amount": 2.48,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "209",
    "payments": [
      {
        "id": "sql-payment-order-209",
        "date": "2019-11-08",
        "method": "Cash",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "210",
    "payments": [
      {
        "id": "sql-payment-order-210",
        "date": "2020-08-29",
        "method": "Check",
        "reference": "Offline",
        "amount": 2800.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-76",
        "date": "2020-08-31",
        "description": "Jess - Burkhardt Wedding",
        "amount": 1500.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "212",
    "payments": [
      {
        "id": "sql-payment-order-212",
        "date": "2019-10-15",
        "method": "Cash",
        "reference": "Offline",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "213",
    "payments": [
      {
        "id": "sql-payment-order-213",
        "date": "2019-10-15",
        "method": "Check",
        "reference": "Offline",
        "amount": 106.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "214",
    "payments": [
      {
        "id": "sql-payment-order-214",
        "date": "2019-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "215",
    "payments": [
      {
        "id": "sql-payment-order-215",
        "date": "2019-10-08",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "218",
    "payments": [
      {
        "id": "sql-payment-order-218",
        "date": "2019-10-13",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "221",
    "payments": [
      {
        "id": "sql-payment-order-221",
        "date": "2019-10-29",
        "method": "PayPal - instant",
        "reference": "7G34674571226635B",
        "amount": 846.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-58",
        "date": "2019-10-29",
        "description": "Order #221 expense",
        "amount": 24.83,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "223",
    "payments": [
      {
        "id": "sql-payment-order-223",
        "date": "2019-11-24",
        "method": "Offline",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "224",
    "payments": [
      {
        "id": "sql-payment-order-224",
        "date": "2019-12-08",
        "method": "Offline",
        "reference": "Offline",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "225",
    "payments": [
      {
        "id": "sql-payment-order-225",
        "date": "2019-11-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 106.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "226",
    "payments": [
      {
        "id": "sql-payment-order-226",
        "date": "2019-11-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "228",
    "payments": [
      {
        "id": "sql-payment-order-228",
        "date": "2019-11-23",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "229",
    "payments": [
      {
        "id": "sql-payment-order-229",
        "date": "2019-11-23",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "231",
    "payments": [
      {
        "id": "sql-payment-order-231",
        "date": "2019-11-29",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "232",
    "payments": [
      {
        "id": "sql-payment-order-232",
        "date": "2019-12-09",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "233",
    "payments": [
      {
        "id": "sql-payment-order-233",
        "date": "2019-11-19",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "234",
    "payments": [
      {
        "id": "sql-payment-order-234",
        "date": "2019-11-24",
        "method": "Cash",
        "reference": "Offline",
        "amount": 158.63
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "236",
    "payments": [
      {
        "id": "sql-payment-order-236",
        "date": "2019-12-23",
        "method": "Cash",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "237",
    "payments": [
      {
        "id": "sql-payment-order-237",
        "date": "2019-08-19",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 105.75
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "238",
    "payments": [
      {
        "id": "sql-payment-order-238",
        "date": "2019-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "239",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-59",
        "date": "2019-12-11",
        "description": "Order #239 expense",
        "amount": 27.81,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "240",
    "payments": [
      {
        "id": "sql-payment-order-240",
        "date": "2019-12-17",
        "method": "PayPal - instant",
        "reference": "6G57517713850890X",
        "amount": 157.13
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-60",
        "date": "2019-12-17",
        "description": "Order #240 expense",
        "amount": 4.86,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "241",
    "payments": [
      {
        "id": "sql-payment-order-241",
        "date": "2019-12-22",
        "method": "PayPal - instant",
        "reference": "1JH60927NK858991E",
        "amount": 106.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-61",
        "date": "2019-12-22",
        "description": "Order #241 expense",
        "amount": 3.37,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "242",
    "payments": [
      {
        "id": "sql-payment-order-242",
        "date": "2019-12-20",
        "method": "Check",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "243",
    "payments": [
      {
        "id": "sql-payment-order-243",
        "date": "2019-12-22",
        "method": "Check",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "244",
    "payments": [
      {
        "id": "sql-payment-order-244",
        "date": "2020-01-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "250",
    "payments": [
      {
        "id": "sql-payment-order-250",
        "date": "2020-02-21",
        "method": "Check",
        "reference": "Offline",
        "amount": 105.75
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "253",
    "payments": [
      {
        "id": "sql-payment-order-253",
        "date": "2020-02-20",
        "method": "PayPal - instant",
        "reference": "1Y226168Y0895453N",
        "amount": 614.8
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-62",
        "date": "2020-02-20",
        "description": "Order #253 expense",
        "amount": 18.13,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "254",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-63",
        "date": "2020-02-21",
        "description": "Order #254 expense",
        "amount": 27.04,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "259",
    "payments": [
      {
        "id": "sql-payment-order-259",
        "date": "2020-06-22",
        "method": "Check",
        "reference": "Check #550",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "260",
    "payments": [
      {
        "id": "sql-payment-order-260",
        "date": "2020-06-15",
        "method": "PayPal - instant",
        "reference": "9YU394927U177312X",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-70",
        "date": "2020-06-15",
        "description": "Order #260 expense",
        "amount": 4.91,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "262",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-72",
        "date": "2020-08-05",
        "description": "Order #262 expense",
        "amount": 16.62,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "267",
    "payments": [
      {
        "id": "sql-payment-order-267",
        "date": "2020-08-18",
        "method": "Cash",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "268",
    "payments": [
      {
        "id": "sql-payment-order-268",
        "date": "2020-09-10",
        "method": "Cash",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "269",
    "payments": [
      {
        "id": "sql-payment-order-269",
        "date": "2020-09-15",
        "method": "Cash",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "270",
    "payments": [
      {
        "id": "sql-payment-order-270",
        "date": "2020-12-05",
        "method": "Cash",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "271",
    "payments": [
      {
        "id": "sql-payment-order-271",
        "date": "2020-09-03",
        "method": "Check",
        "reference": "Offline",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "272",
    "payments": [
      {
        "id": "sql-payment-order-272",
        "date": "2020-09-07",
        "method": "Check",
        "reference": "",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "274",
    "payments": [
      {
        "id": "sql-payment-order-274",
        "date": "2020-09-16",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "275",
    "payments": [
      {
        "id": "sql-payment-order-275",
        "date": "2020-09-16",
        "method": "Cash",
        "reference": "Offline",
        "amount": 90.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "276",
    "payments": [
      {
        "id": "sql-payment-order-276",
        "date": "2020-09-18",
        "method": "PayPal - instant",
        "reference": "3DR50386DF307430R",
        "amount": 200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-80",
        "date": "2020-09-18",
        "description": "Order #276 expense",
        "amount": 6.1,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "278",
    "payments": [
      {
        "id": "sql-payment-order-278",
        "date": "2020-11-22",
        "method": "Cash",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "282",
    "payments": [
      {
        "id": "sql-payment-order-282",
        "date": "2020-11-17",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "284",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-85",
        "date": "2020-12-02",
        "description": "Order #284 expense",
        "amount": 4.65,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "286",
    "payments": [
      {
        "id": "sql-payment-order-286",
        "date": "2020-12-06",
        "method": "Cash",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "287",
    "payments": [
      {
        "id": "sql-payment-order-287",
        "date": "2020-12-18",
        "method": "Cash",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "289",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-86",
        "date": "2021-01-23",
        "description": "Order #289 expense",
        "amount": 14.8,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "294",
    "payments": [
      {
        "id": "sql-payment-schedule-34",
        "date": "2020-08-05",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-35",
        "date": "2021-04-22",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-101",
        "date": "2021-04-23",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-102",
        "date": "2021-05-26",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-105",
        "date": "2021-05-28",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-107",
        "date": "2021-06-02",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-108",
        "date": "2021-06-04",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-109",
        "date": "2021-06-08",
        "method": "Venmo",
        "reference": "",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-110",
        "date": "2021-06-11",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-111",
        "date": "2021-06-12",
        "method": "Check",
        "reference": "",
        "amount": 1300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-89",
        "date": "2020-08-07",
        "description": "Jess - Falconi Wedding",
        "amount": 400.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-288",
        "date": "2021-05-26",
        "description": "Jess - Paid via Venmo 5/26",
        "amount": 500.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-290",
        "date": "2021-05-28",
        "description": "Jess - Paid via Venmo 5/28",
        "amount": 500.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-291",
        "date": "2021-06-02",
        "description": "Jess - Venmo",
        "amount": 250.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-292",
        "date": "2021-06-04",
        "description": "Jess - Venmo",
        "amount": 250.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-293",
        "date": "2021-06-08",
        "description": "Jess - Venmo",
        "amount": 500.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-294",
        "date": "2021-06-11",
        "description": "Jess - Venmo",
        "amount": 500.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "295",
    "payments": [
      {
        "id": "sql-payment-schedule-36",
        "date": "2019-08-21",
        "method": "Cash",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-37",
        "date": "2020-02-01",
        "method": "Cash",
        "reference": "",
        "amount": 2500.0
      },
      {
        "id": "sql-payment-schedule-38",
        "date": "2020-03-06",
        "method": "Check",
        "reference": "",
        "amount": 900.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "296",
    "payments": [
      {
        "id": "sql-payment-schedule-39",
        "date": "2019-08-19",
        "method": "Cash",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-40",
        "date": "2020-02-01",
        "method": "Cash",
        "reference": "",
        "amount": 2500.0
      },
      {
        "id": "sql-payment-schedule-41",
        "date": "2020-03-06",
        "method": "Check",
        "reference": "",
        "amount": 900.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "297",
    "payments": [
      {
        "id": "sql-payment-schedule-42",
        "date": "2019-11-03",
        "method": "Cash",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-43",
        "date": "2019-11-03",
        "method": "Check",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-44",
        "date": "2020-08-14",
        "method": "Check",
        "reference": "",
        "amount": 3175.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-90",
        "date": "2020-08-19",
        "description": "Jess - Pursel Wedding",
        "amount": 1375.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "298",
    "payments": [
      {
        "id": "sql-payment-schedule-45",
        "date": "2019-09-12",
        "method": "PayPal",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-46",
        "date": "2019-10-23",
        "method": "Cash",
        "reference": "",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-47",
        "date": "2020-09-04",
        "method": "Cash",
        "reference": "",
        "amount": 2400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-91",
        "date": "2020-09-06",
        "description": "Jess - Palm Wedding",
        "amount": 1200.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "299",
    "payments": [
      {
        "id": "sql-payment-schedule-48",
        "date": "2019-10-14",
        "method": "Check",
        "reference": "",
        "amount": 964.6
      },
      {
        "id": "sql-payment-schedule-49",
        "date": "2020-02-09",
        "method": "Check",
        "reference": "",
        "amount": 800.0
      },
      {
        "id": "sql-payment-schedule-50",
        "date": "2020-04-10",
        "method": "Check",
        "reference": "",
        "amount": 800.0
      },
      {
        "id": "sql-payment-schedule-51",
        "date": "2020-06-26",
        "method": "Check",
        "reference": "",
        "amount": 800.0
      },
      {
        "id": "sql-payment-schedule-52",
        "date": "2020-07-17",
        "method": "Check",
        "reference": "",
        "amount": 700.0
      },
      {
        "id": "sql-payment-schedule-53",
        "date": "2020-08-25",
        "method": "Check",
        "reference": "",
        "amount": 223.1
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-92",
        "date": "2020-08-31",
        "description": "Jess - Lesheski Wedding / Cash and Canon 50",
        "amount": 875.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "300",
    "payments": [
      {
        "id": "sql-payment-schedule-54",
        "date": "2019-12-14",
        "method": "Cash",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-55",
        "date": "2020-04-10",
        "method": "PayPal",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-56",
        "date": "2020-05-12",
        "method": "PayPal",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-57",
        "date": "2020-05-25",
        "method": "PayPal",
        "reference": "",
        "amount": 150.0
      },
      {
        "id": "sql-payment-schedule-58",
        "date": "2020-06-08",
        "method": "PayPal",
        "reference": "",
        "amount": 769.7
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-93",
        "date": "2020-05-12",
        "description": "Jess - Holmes Wedding",
        "amount": 250.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-94",
        "date": "2020-05-25",
        "description": "Jess - Holmes Wedding",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-95",
        "date": "2020-06-08",
        "description": "Jess - Holmes Wedding",
        "amount": 650.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "301",
    "payments": [
      {
        "id": "sql-payment-schedule-59",
        "date": "2020-03-26",
        "method": "PayPal",
        "reference": "",
        "amount": 951.75
      },
      {
        "id": "sql-payment-schedule-60",
        "date": "2020-09-07",
        "method": "Check",
        "reference": "",
        "amount": 3172.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-96",
        "date": "2020-03-27",
        "description": "Jess - Cesene Wedding",
        "amount": 950.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-97",
        "date": "2020-11-22",
        "description": "Jess - Cesene Wedding",
        "amount": 900.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "302",
    "payments": [
      {
        "id": "sql-payment-schedule-61",
        "date": "2019-12-11",
        "method": "PayPal",
        "reference": "",
        "amount": 948.7
      },
      {
        "id": "sql-payment-schedule-62",
        "date": "2020-03-15",
        "method": "Cash",
        "reference": "",
        "amount": 600.0
      },
      {
        "id": "sql-payment-schedule-63",
        "date": "2020-08-30",
        "method": "Cash",
        "reference": "",
        "amount": 2900.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-98",
        "date": "2019-12-11",
        "description": "Paypal Fees",
        "amount": 27.81,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-99",
        "date": "2020-03-15",
        "description": "Jess - Paige Eltringham Wedding - Cash $600",
        "amount": 600.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-100",
        "date": "2020-09-02",
        "description": "Jess - Paige Eltringham Wedding",
        "amount": 1300.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "303",
    "payments": [
      {
        "id": "sql-payment-schedule-64",
        "date": "2021-02-08",
        "method": "PayPal",
        "reference": "",
        "amount": 1250.0
      },
      {
        "id": "sql-payment-schedule-65",
        "date": "2021-02-21",
        "method": "PayPal",
        "reference": "",
        "amount": 1400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-101",
        "date": "2021-02-13",
        "description": "Jess - Kocis Wedding 1/2",
        "amount": 625.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-106",
        "date": "2021-02-21",
        "description": "Jess - Kocis Wedding 2/2",
        "amount": 700.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "304",
    "payments": [
      {
        "id": "sql-payment-schedule-66",
        "date": "2020-09-23",
        "method": "Check",
        "reference": "",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-67",
        "date": "2021-07-02",
        "method": "Check",
        "reference": "",
        "amount": 3774.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-297",
        "date": "2021-07-06",
        "description": "Jess - Venmo",
        "amount": 1850.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "305",
    "payments": [
      {
        "id": "sql-payment-schedule-70",
        "date": "2019-11-01",
        "method": "PayPal",
        "reference": "",
        "amount": 858.6
      },
      {
        "id": "sql-payment-schedule-71",
        "date": "2021-07-05",
        "method": "Check",
        "reference": "",
        "amount": 4012.1
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-298",
        "date": "2021-07-07",
        "description": "Jess - Venmo",
        "amount": 1850.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "306",
    "payments": [
      {
        "id": "sql-payment-schedule-72",
        "date": "2021-01-30",
        "method": "Check",
        "reference": "",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-73",
        "date": "2021-07-06",
        "method": "Venmo",
        "reference": "",
        "amount": 1590.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "307",
    "payments": [
      {
        "id": "sql-payment-schedule-74",
        "date": "2020-11-05",
        "method": "Check",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-75",
        "date": "2021-08-09",
        "method": "Venmo",
        "reference": "",
        "amount": 1855.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-102",
        "date": "2020-11-05",
        "description": "Paypal Fees",
        "amount": 14.8,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "308",
    "payments": [
      {
        "id": "sql-payment-schedule-76",
        "date": "2020-02-21",
        "method": "PayPal",
        "reference": "",
        "amount": 922.2
      },
      {
        "id": "sql-payment-schedule-78",
        "date": "2020-06-15",
        "method": "Check",
        "reference": "",
        "amount": 150.0
      },
      {
        "id": "sql-payment-schedule-77",
        "date": "2021-08-20",
        "method": "PayPal",
        "reference": "",
        "amount": 3327.7
      },
      {
        "id": "sql-payment-schedule-126",
        "date": "2021-09-01",
        "method": "PayPal",
        "reference": "",
        "amount": 250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-301",
        "date": "2021-08-21",
        "description": "Jess - Paypal",
        "amount": 1650.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "309",
    "payments": [
      {
        "id": "sql-payment-schedule-79",
        "date": "2021-01-23",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-80",
        "date": "2021-04-13",
        "method": "PayPal",
        "reference": "",
        "amount": 150.0
      },
      {
        "id": "sql-payment-schedule-99",
        "date": "2021-07-09",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-114",
        "date": "2021-07-26",
        "method": "PayPal",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-117",
        "date": "2021-08-10",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-121",
        "date": "2021-08-18",
        "method": "PayPal",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-124",
        "date": "2021-08-28",
        "method": "PayPal",
        "reference": "",
        "amount": 1654.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-296",
        "date": "2021-07-01",
        "description": "Ashley Munson - Venmo",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-305",
        "date": "2021-08-31",
        "description": "Ashley Munson - Venmo",
        "amount": 900.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "310",
    "payments": [
      {
        "id": "sql-payment-schedule-81",
        "date": "2019-08-17",
        "method": "PayPal",
        "reference": "",
        "amount": 634.5
      },
      {
        "id": "sql-payment-schedule-82",
        "date": "2020-01-19",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-83",
        "date": "2021-08-23",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-127",
        "date": "2021-08-24",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-128",
        "date": "2021-08-25",
        "method": "PayPal",
        "reference": "",
        "amount": 400.0
      },
      {
        "id": "sql-payment-schedule-129",
        "date": "2021-09-03",
        "method": "PayPal",
        "reference": "",
        "amount": 378.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-103",
        "date": "2020-05-17",
        "description": "Paypal Fees",
        "amount": 18.7,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-302",
        "date": "2021-08-23",
        "description": "Jess - Paypal",
        "amount": 250.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-304",
        "date": "2021-08-24",
        "description": "Jess - Paypal",
        "amount": 250.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-303",
        "date": "2021-08-25",
        "description": "Jess - Paypal",
        "amount": 200.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-306",
        "date": "2021-09-03",
        "description": "Jess - Paypal",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "311",
    "payments": [
      {
        "id": "sql-payment-schedule-84",
        "date": "2020-08-05",
        "method": "PayPal",
        "reference": "",
        "amount": 371.0
      },
      {
        "id": "sql-payment-schedule-85",
        "date": "2021-04-14",
        "method": "PayPal",
        "reference": "",
        "amount": 207.36
      },
      {
        "id": "sql-payment-schedule-100",
        "date": "2021-05-13",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-103",
        "date": "2021-05-27",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-106",
        "date": "2021-07-24",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-118",
        "date": "2021-08-19",
        "method": "PayPal",
        "reference": "",
        "amount": 250.0
      },
      {
        "id": "sql-payment-schedule-125",
        "date": "2021-09-02",
        "method": "PayPal",
        "reference": "",
        "amount": 250.0
      },
      {
        "id": "sql-payment-schedule-132",
        "date": "2021-09-16",
        "method": "PayPal",
        "reference": "",
        "amount": 176.64
      },
      {
        "id": "sql-payment-schedule-135",
        "date": "2021-09-20",
        "method": "PayPal",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-136",
        "date": "2021-09-21",
        "method": "PayPal",
        "reference": "",
        "amount": 375.0
      },
      {
        "id": "sql-payment-schedule-137",
        "date": "2021-09-27",
        "method": "PayPal",
        "reference": "",
        "amount": 450.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-104",
        "date": "2020-08-05",
        "description": "Paypal Fees",
        "amount": 16.62,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-286",
        "date": "2021-04-14",
        "description": "4/14/21 - $207.36 Payment",
        "amount": 9.42,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-287",
        "date": "2021-05-13",
        "description": "5/23/21 - $200 Payment",
        "amount": 9.1,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-289",
        "date": "2021-05-27",
        "description": "$200 Paypal 5/27/21",
        "amount": 9.1,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-299",
        "date": "2021-07-24",
        "description": "Order #311 expense",
        "amount": 9.1,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-300",
        "date": "2021-08-19",
        "description": "Order #311 expense",
        "amount": 11.47,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-307",
        "date": "2021-09-16",
        "description": "Paypal Fees",
        "amount": 8.26,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-309",
        "date": "2021-09-20",
        "description": "Order #311 expense",
        "amount": 22.44,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-310",
        "date": "2021-09-21",
        "description": "Order #311 expense",
        "amount": 16.95,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-311",
        "date": "2021-09-27",
        "description": "Order #311 expense",
        "amount": 20.25,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "312",
    "payments": [
      {
        "id": "sql-payment-schedule-86",
        "date": "2019-08-21",
        "method": "PayPal",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-87",
        "date": "2021-10-02",
        "method": "Cash",
        "reference": "",
        "amount": 4300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-312",
        "date": "2021-10-03",
        "description": "Jess - Cash",
        "amount": 2160.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "313",
    "payments": [
      {
        "id": "sql-payment-schedule-88",
        "date": "2020-06-19",
        "method": "PayPal",
        "reference": "",
        "amount": 1100.0
      },
      {
        "id": "sql-payment-schedule-89",
        "date": "2021-10-06",
        "method": "Cash",
        "reference": "",
        "amount": 4147.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-105",
        "date": "2020-06-22",
        "description": "Jess - Powell Wedding",
        "amount": 1100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-313",
        "date": "2021-10-06",
        "description": "Jess",
        "amount": 1574.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "314",
    "payments": [
      {
        "id": "sql-payment-schedule-90",
        "date": "2021-01-22",
        "method": "Cash",
        "reference": "",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-91",
        "date": "2021-10-22",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "316",
    "payments": [
      {
        "id": "sql-payment-order-316",
        "date": "2016-03-05",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "317",
    "payments": [
      {
        "id": "sql-payment-order-317",
        "date": "2016-10-07",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "318",
    "payments": [
      {
        "id": "sql-payment-order-318",
        "date": "2016-08-20",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "319",
    "payments": [
      {
        "id": "sql-payment-order-319",
        "date": "2016-11-04",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "320",
    "payments": [
      {
        "id": "sql-payment-order-320",
        "date": "2016-12-31",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "321",
    "payments": [
      {
        "id": "sql-payment-schedule-92",
        "date": "2020-10-29",
        "method": "PayPal",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-93",
        "date": "2021-07-10",
        "method": "Check",
        "reference": "",
        "amount": 1625.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "322",
    "payments": [
      {
        "id": "sql-payment-schedule-94",
        "date": "2021-05-21",
        "method": "Venmo",
        "reference": "",
        "amount": 1500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "323",
    "payments": [
      {
        "id": "sql-payment-schedule-95",
        "date": "2021-04-11",
        "method": "PayPal",
        "reference": "",
        "amount": 371.0
      },
      {
        "id": "sql-payment-schedule-96",
        "date": "2021-05-17",
        "method": "PayPal",
        "reference": "",
        "amount": 1484.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "325",
    "payments": [
      {
        "id": "sql-payment-order-325",
        "date": "2021-04-23",
        "method": "Cash",
        "reference": "Offline",
        "amount": 130.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "326",
    "payments": [
      {
        "id": "sql-payment-order-326",
        "date": "2018-06-02",
        "method": "Cash",
        "reference": "",
        "amount": 800.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "327",
    "payments": [
      {
        "id": "sql-payment-order-327",
        "date": "2018-07-07",
        "method": "Cash",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "328",
    "payments": [
      {
        "id": "sql-payment-order-328",
        "date": "2018-12-29",
        "method": "Cash",
        "reference": "",
        "amount": 1250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "336",
    "payments": [
      {
        "id": "sql-payment-order-336",
        "date": "2021-04-18",
        "method": "PayPal",
        "reference": "",
        "amount": 125.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "337",
    "payments": [
      {
        "id": "sql-payment-order-337",
        "date": "2021-03-27",
        "method": "Cash",
        "reference": "",
        "amount": 95.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "338",
    "payments": [
      {
        "id": "sql-payment-order-338",
        "date": "2021-05-08",
        "method": "Cash",
        "reference": "",
        "amount": 160.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "340",
    "payments": [
      {
        "id": "sql-payment-schedule-104",
        "date": "2021-09-02",
        "method": "Venmo",
        "reference": "",
        "amount": 325.0
      },
      {
        "id": "sql-payment-schedule-133",
        "date": "2021-09-15",
        "method": "Venmo",
        "reference": "",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "341",
    "payments": [
      {
        "id": "sql-payment-order-341",
        "date": "2021-05-24",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 160.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "342",
    "payments": [
      {
        "id": "sql-payment-order-342",
        "date": "2021-07-09",
        "method": "Offline",
        "reference": "Offline",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "344",
    "payments": [
      {
        "id": "sql-payment-order-344",
        "date": "2021-07-25",
        "method": "Cash",
        "reference": "Offline",
        "amount": 70.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "346",
    "payments": [
      {
        "id": "sql-payment-order-346",
        "date": "",
        "method": "Offline",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "349",
    "payments": [
      {
        "id": "sql-payment-schedule-112",
        "date": "2021-07-07",
        "method": "Cash",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-113",
        "date": "2022-08-30",
        "method": "Cash",
        "reference": "",
        "amount": 1750.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-444",
        "date": "2022-10-12",
        "description": "Cut Pro Media - Miranda + Ethan Highlight Film",
        "amount": 200.0,
        "category": "commission",
        "reference": "0XX55947AL010421E"
      }
    ]
  },
  {
    "orderNumber": "351",
    "payments": [
      {
        "id": "sql-payment-schedule-115",
        "date": "2021-07-23",
        "method": "Venmo",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-116",
        "date": "2021-09-17",
        "method": "Venmo",
        "reference": "",
        "amount": 400.0
      },
      {
        "id": "sql-payment-schedule-134",
        "date": "2022-07-31",
        "method": "Venmo",
        "reference": "3594825759972988702",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-240",
        "date": "2022-10-05",
        "method": "Venmo",
        "reference": "3642547182761623743",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-274",
        "date": "2023-04-07",
        "method": "Venmo",
        "reference": "3776121018240506547",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-306",
        "date": "2023-06-05",
        "method": "Venmo",
        "reference": "3818900519394971004",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-320",
        "date": "2023-09-12",
        "method": "Venmo",
        "reference": "3890266700504206624",
        "amount": 300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-513",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "352",
    "payments": [
      {
        "id": "sql-payment-order-352",
        "date": "2021-10-17",
        "method": "Cash",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "355",
    "payments": [
      {
        "id": "sql-payment-schedule-119",
        "date": "2021-08-06",
        "method": "Cash",
        "reference": "",
        "amount": 800.0
      },
      {
        "id": "sql-payment-schedule-120",
        "date": "2021-11-14",
        "method": "Cash",
        "reference": "",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-150",
        "date": "2022-07-08",
        "method": "Cash",
        "reference": "",
        "amount": 2520.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-404",
        "date": "2022-07-26",
        "description": "Stefan Marcella",
        "amount": 150.0,
        "category": "second shooter",
        "reference": "3590956988228458651"
      }
    ]
  },
  {
    "orderNumber": "357",
    "payments": [
      {
        "id": "sql-payment-schedule-122",
        "date": "2021-08-11",
        "method": "Check",
        "reference": "",
        "amount": 425.0
      },
      {
        "id": "sql-payment-schedule-123",
        "date": "2022-04-25",
        "method": "Check",
        "reference": "11319",
        "amount": 1945.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "362",
    "payments": [
      {
        "id": "sql-payment-schedule-130",
        "date": "2021-12-05",
        "method": "Venmo",
        "reference": "",
        "amount": 325.0
      },
      {
        "id": "sql-payment-schedule-131",
        "date": "2022-04-03",
        "method": "Venmo",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-187",
        "date": "2022-07-10",
        "method": "Cash",
        "reference": "",
        "amount": 965.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "364",
    "payments": [
      {
        "id": "sql-payment-order-364",
        "date": "2021-10-27",
        "method": "Cash",
        "reference": "Offline",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "365",
    "payments": [
      {
        "id": "sql-payment-order-365",
        "date": "2021-10-05",
        "method": "Apple Pay",
        "reference": "",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "366",
    "payments": [
      {
        "id": "sql-payment-order-366",
        "date": "2021-10-14",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "367",
    "payments": [
      {
        "id": "sql-payment-order-367",
        "date": "2021-12-05",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "368",
    "payments": [
      {
        "id": "sql-payment-order-368",
        "date": "2021-09-29",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "369",
    "payments": [
      {
        "id": "sql-payment-order-369",
        "date": "2021-11-04",
        "method": "Check",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "371",
    "payments": [
      {
        "id": "sql-payment-order-371",
        "date": "2021-12-18",
        "method": "Cash",
        "reference": "",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "373",
    "payments": [
      {
        "id": "sql-payment-schedule-138",
        "date": "2021-10-08",
        "method": "Venmo",
        "reference": "",
        "amount": 148.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "375",
    "payments": [
      {
        "id": "sql-payment-schedule-142",
        "date": "2021-10-24",
        "method": "Venmo",
        "reference": "",
        "amount": 508.8
      },
      {
        "id": "sql-payment-schedule-143",
        "date": "2022-09-14",
        "method": "Venmo",
        "reference": "3627300840225361590",
        "amount": 2194.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "377",
    "payments": [
      {
        "id": "sql-payment-schedule-140",
        "date": "2021-10-12",
        "method": "PayPal",
        "reference": "",
        "amount": 222.08
      },
      {
        "id": "sql-payment-schedule-141",
        "date": "2022-10-02",
        "method": "Zelle",
        "reference": "PNCAA0CZI97r",
        "amount": 1261.92
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-474",
        "date": "2022-12-01",
        "description": "Video Edit",
        "amount": 200.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "380",
    "payments": [
      {
        "id": "sql-payment-order-380",
        "date": "2021-10-26",
        "method": "Cash",
        "reference": "",
        "amount": 125.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "381",
    "payments": [
      {
        "id": "sql-payment-order-381",
        "date": "2021-12-03",
        "method": "Venmo",
        "reference": "",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "382",
    "payments": [
      {
        "id": "sql-payment-order-382",
        "date": "2021-12-01",
        "method": "PayPal",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "384",
    "payments": [
      {
        "id": "sql-payment-schedule-144",
        "date": "2021-10-27",
        "method": "Check",
        "reference": "",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-145",
        "date": "2022-06-06",
        "method": "Venmo",
        "reference": "",
        "amount": 86.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "387",
    "payments": [
      {
        "id": "sql-payment-order-387",
        "date": "2021-11-02",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 265.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "388",
    "payments": [
      {
        "id": "sql-payment-order-388",
        "date": "2021-11-01",
        "method": "Venmo/Cash",
        "reference": "Offline",
        "amount": 456.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "390",
    "payments": [
      {
        "id": "sql-payment-schedule-146",
        "date": "2021-11-06",
        "method": "PayPal",
        "reference": "",
        "amount": 540.6
      },
      {
        "id": "sql-payment-schedule-147",
        "date": "2023-05-18",
        "method": "PayPal",
        "reference": "3GR8526578990083N",
        "amount": 2162.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-514",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "393",
    "payments": [
      {
        "id": "sql-payment-schedule-148",
        "date": "2021-11-09",
        "method": "Venmo",
        "reference": "",
        "amount": 662.5
      },
      {
        "id": "sql-payment-schedule-149",
        "date": "2022-02-12",
        "method": "Venmo",
        "reference": "",
        "amount": 300.0
      },
      {
        "id": "sql-payment-schedule-224",
        "date": "2022-07-04",
        "method": "Venmo",
        "reference": "3575030963293345715",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-228",
        "date": "2022-07-11",
        "method": "Venmo",
        "reference": "3580304225748570904",
        "amount": 1717.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "395",
    "payments": [
      {
        "id": "sql-payment-schedule-151",
        "date": "2022-10-01",
        "method": "Cash",
        "reference": "",
        "amount": 2000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "396",
    "payments": [
      {
        "id": "sql-payment-order-396",
        "date": "2022-01-04",
        "method": "PayPal",
        "reference": "",
        "amount": 954.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-315",
        "date": "2022-01-04",
        "description": "Order #396 expense",
        "amount": 28.06,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "397",
    "payments": [
      {
        "id": "sql-payment-order-397",
        "date": "2021-12-11",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "398",
    "payments": [
      {
        "id": "sql-payment-order-398",
        "date": "2021-11-23",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 265.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "400",
    "payments": [
      {
        "id": "sql-payment-schedule-152",
        "date": "2021-11-29",
        "method": "Venmo",
        "reference": "",
        "amount": 784.4
      },
      {
        "id": "sql-payment-schedule-153",
        "date": "2022-05-30",
        "method": "PayPal",
        "reference": "",
        "amount": 2745.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-314",
        "date": "2021-11-29",
        "description": "Deposit 11/29/21 - $784.40",
        "amount": 15.0,
        "category": "venmo fees",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "402",
    "payments": [
      {
        "id": "sql-payment-schedule-156",
        "date": "2021-12-31",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-157",
        "date": "2022-09-06",
        "method": "Cash",
        "reference": "",
        "amount": 2350.0
      },
      {
        "id": "sql-payment-schedule-266",
        "date": "2022-10-08",
        "method": "Cash",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-469",
        "date": "2022-11-19",
        "description": "Ceremony and 1 hour video refund $600 + $36 tax = $636",
        "amount": 636.0,
        "category": "Refund",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "403",
    "payments": [
      {
        "id": "sql-payment-order-403",
        "date": "2021-12-19",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "406",
    "payments": [
      {
        "id": "sql-payment-schedule-154",
        "date": "2021-12-11",
        "method": "PayPal",
        "reference": "",
        "amount": 472.0
      },
      {
        "id": "sql-payment-schedule-155",
        "date": "2022-01-14",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-160",
        "date": "2022-02-27",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-172",
        "date": "2022-04-25",
        "method": "PayPal",
        "reference": "",
        "amount": 250.0
      },
      {
        "id": "sql-payment-schedule-192",
        "date": "2022-05-06",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-257",
        "date": "2022-05-25",
        "method": "PayPal",
        "reference": "9XN68554JA667943L",
        "amount": 150.0
      },
      {
        "id": "sql-payment-schedule-204",
        "date": "2022-06-25",
        "method": "PayPal",
        "reference": "",
        "amount": 175.0
      },
      {
        "id": "sql-payment-schedule-226",
        "date": "2022-07-09",
        "method": "PayPal",
        "reference": "6G797922WM275474X",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-229",
        "date": "2022-08-04",
        "method": "PayPal",
        "reference": "7R983117M1907702H",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-247",
        "date": "2022-08-17",
        "method": "PayPal",
        "reference": "6R990698KD895463Y",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-251",
        "date": "2022-08-21",
        "method": "PayPal",
        "reference": "4VH82597XX940184L",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-256",
        "date": "2022-08-26",
        "method": "PayPal",
        "reference": "1WX661724F654004X",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-261",
        "date": "2022-09-02",
        "method": "PayPal",
        "reference": "30X37167W7976442W",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-267",
        "date": "2022-09-16",
        "method": "PayPal",
        "reference": "62B91821514863131",
        "amount": 111.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "408",
    "payments": [
      {
        "id": "sql-payment-order-408",
        "date": "2021-12-19",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "409",
    "payments": [
      {
        "id": "sql-payment-order-409",
        "date": "2022-01-08",
        "method": "PayPal",
        "reference": "Offline",
        "amount": 265.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-316",
        "date": "2022-01-08",
        "description": "Order #409 expense",
        "amount": 8.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "412",
    "payments": [
      {
        "id": "sql-payment-schedule-158",
        "date": "2022-01-08",
        "method": "PayPal",
        "reference": "",
        "amount": 275.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "414",
    "payments": [
      {
        "id": "sql-payment-schedule-161",
        "date": "2022-01-23",
        "method": "Check",
        "reference": "",
        "amount": 540.6
      },
      {
        "id": "sql-payment-schedule-162",
        "date": "2022-09-22",
        "method": "Check",
        "reference": "1580",
        "amount": 2162.4
      },
      {
        "id": "sql-payment-schedule-276",
        "date": "2022-11-12",
        "method": "Check",
        "reference": "",
        "amount": 2756.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-475",
        "date": "2022-12-01",
        "description": "Video Edit",
        "amount": 230.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "415",
    "payments": [
      {
        "id": "sql-payment-order-415",
        "date": "2022-01-25",
        "method": "PayPal",
        "reference": "",
        "amount": 510.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-322",
        "date": "2022-01-25",
        "description": "Atomos Ninja V Paypal Fees",
        "amount": 15.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "417",
    "payments": [
      {
        "id": "sql-payment-schedule-163",
        "date": "2022-03-03",
        "method": "Venmo",
        "reference": "",
        "amount": 148.05
      },
      {
        "id": "sql-payment-schedule-164",
        "date": "2022-08-27",
        "method": "Check",
        "reference": "",
        "amount": 2819.95
      },
      {
        "id": "sql-payment-schedule-260",
        "date": "2022-09-14",
        "method": "Venmo",
        "reference": "3627264384483956342",
        "amount": 175.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "419",
    "payments": [
      {
        "id": "sql-payment-order-419",
        "date": "2022-05-14",
        "method": "Cash",
        "reference": "",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "424",
    "payments": [
      {
        "id": "sql-payment-schedule-165",
        "date": "2022-02-05",
        "method": "Venmo",
        "reference": "",
        "amount": 63.6
      },
      {
        "id": "sql-payment-schedule-166",
        "date": "2022-05-23",
        "method": "Venmo",
        "reference": "",
        "amount": 445.2
      },
      {
        "id": "sql-payment-schedule-219",
        "date": "2022-12-03",
        "method": "Cash",
        "reference": "",
        "amount": 1935.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-472",
        "date": "2022-12-01",
        "description": "Video Edit",
        "amount": 200.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "426",
    "payments": [
      {
        "id": "sql-payment-schedule-168",
        "date": "2022-02-17",
        "method": "PayPal",
        "reference": "",
        "amount": 676.8
      },
      {
        "id": "sql-payment-schedule-169",
        "date": "2022-10-19",
        "method": "PayPal",
        "reference": "9XB34886AV209331H",
        "amount": 2707.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-451",
        "date": "2022-10-19",
        "description": "9XB34886AV209331H",
        "amount": 80.95,
        "category": "Processing",
        "reference": "9XB34886AV209331H"
      }
    ]
  },
  {
    "orderNumber": "427",
    "payments": [
      {
        "id": "sql-payment-order-427",
        "date": "2022-02-21",
        "method": "PayPal",
        "reference": "",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "429",
    "payments": [
      {
        "id": "sql-payment-schedule-170",
        "date": "2022-02-24",
        "method": "Venmo",
        "reference": "",
        "amount": 636.0
      },
      {
        "id": "sql-payment-schedule-171",
        "date": "2022-08-04",
        "method": "Cash App",
        "reference": "E3DBZ64",
        "amount": 1675.0
      },
      {
        "id": "sql-payment-schedule-246",
        "date": "2022-08-29",
        "method": "Cash App",
        "reference": "ADDYRF5",
        "amount": 1675.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-447",
        "date": "2022-10-14",
        "description": "3649085148518295599",
        "amount": 583.0,
        "category": "Refund",
        "reference": "3649085148518295599"
      },
      {
        "id": "sql-expense-453",
        "date": "2022-10-21",
        "description": "Hotel",
        "amount": 356.91,
        "category": "travel",
        "reference": "T3R8QD7CMR4Q"
      },
      {
        "id": "sql-expense-454",
        "date": "2022-10-21",
        "description": "Gas",
        "amount": 114.94,
        "category": "travel",
        "reference": ""
      },
      {
        "id": "sql-expense-463",
        "date": "2022-10-26",
        "description": "Brady Dog Sitting",
        "amount": 150.0,
        "category": "travel",
        "reference": ""
      },
      {
        "id": "sql-expense-476",
        "date": "2022-12-01",
        "description": "Video Edit",
        "amount": 200.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "431",
    "payments": [
      {
        "id": "sql-payment-order-431",
        "date": "2022-03-20",
        "method": "Check",
        "reference": "",
        "amount": 1000.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "433",
    "payments": [
      {
        "id": "sql-payment-schedule-173",
        "date": "2022-03-08",
        "method": "Venmo",
        "reference": "",
        "amount": 645.08
      },
      {
        "id": "sql-payment-schedule-174",
        "date": "2022-04-01",
        "method": "Venmo",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-235",
        "date": "2022-05-24",
        "method": "Venmo",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-186",
        "date": "2022-07-22",
        "method": "Venmo",
        "reference": "3588002004172108004",
        "amount": 400.0
      },
      {
        "id": "sql-payment-schedule-236",
        "date": "2022-08-03",
        "method": "Venmo",
        "reference": "3596840497087105212",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-245",
        "date": "2023-04-11",
        "method": "Venmo",
        "reference": "3778566063907757594",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-307",
        "date": "2023-05-25",
        "method": "Venmo",
        "reference": "3810488587759788911",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-312",
        "date": "2023-09-24",
        "method": "Venmo",
        "reference": "3899173300753385679",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-326",
        "date": "2024-01-30",
        "method": "Venmo",
        "reference": "3991778307196623098",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-337",
        "date": "2024-11-15",
        "method": "Venmo",
        "reference": "4202018654450110390",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-405",
        "date": "2025-06-20",
        "method": "Venmo",
        "reference": "4359037090074017586",
        "amount": 200.0
      },
      {
        "id": "sql-payment-schedule-457",
        "date": "2025-12-24",
        "method": "Venmo",
        "reference": "4494760831611874862",
        "amount": 200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-324",
        "date": "2022-03-08",
        "description": "Lisa Harakal Referral",
        "amount": 100.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "435",
    "payments": [
      {
        "id": "sql-payment-schedule-175",
        "date": "2022-03-13",
        "method": "Zelle",
        "reference": "",
        "amount": 260.0
      },
      {
        "id": "sql-payment-schedule-176",
        "date": "2022-03-25",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-177",
        "date": "2022-04-08",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-178",
        "date": "2022-04-22",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-179",
        "date": "2022-05-06",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-180",
        "date": "2022-05-20",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-181",
        "date": "2022-06-03",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-182",
        "date": "2022-06-17",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-225",
        "date": "2022-07-01",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-227",
        "date": "2022-07-15",
        "method": "Zelle",
        "reference": "",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-232",
        "date": "2022-07-29",
        "method": "Zelle",
        "reference": "PNCAA0Blj62z",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-238",
        "date": "2022-08-13",
        "method": "Zelle",
        "reference": "PNCAA0BuP76c",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-250",
        "date": "2022-08-26",
        "method": "Zelle",
        "reference": "PNCAA0CCD69c",
        "amount": 71.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "437",
    "payments": [
      {
        "id": "sql-payment-schedule-183",
        "date": "2022-03-28",
        "method": "Venmo",
        "reference": "",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-351",
        "date": "2022-03-30",
        "description": "Meggy Lynn Combine",
        "amount": 100.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "438",
    "payments": [
      {
        "id": "sql-payment-order-438",
        "date": "2022-03-26",
        "method": "PayPal",
        "reference": "",
        "amount": 1100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-327",
        "date": "2022-03-26",
        "description": "Order #438 expense",
        "amount": 32.28,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "439",
    "payments": [
      {
        "id": "sql-payment-order-439",
        "date": "2022-03-30",
        "method": "PayPal",
        "reference": "",
        "amount": 475.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "441",
    "payments": [
      {
        "id": "sql-payment-order-441",
        "date": "2022-03-31",
        "method": "Venmo",
        "reference": "",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "442",
    "payments": [
      {
        "id": "sql-payment-order-442",
        "date": "2022-04-25",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "443",
    "payments": [
      {
        "id": "sql-payment-order-443",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "6CF45569AL828211S",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "444",
    "payments": [
      {
        "id": "sql-payment-order-444",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "12D698987L503912V",
        "amount": 42.4
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "445",
    "payments": [
      {
        "id": "sql-payment-order-445",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "",
        "amount": 42.4
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "446",
    "payments": [
      {
        "id": "sql-payment-order-446",
        "date": "2022-04-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "447",
    "payments": [
      {
        "id": "sql-payment-order-447",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "15013402TN9532341",
        "amount": 63.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "448",
    "payments": [
      {
        "id": "sql-payment-order-448",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "4KK616949P489114F",
        "amount": 52.88
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "449",
    "payments": [
      {
        "id": "sql-payment-order-449",
        "date": "2022-04-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "450",
    "payments": [
      {
        "id": "sql-payment-order-450",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "80199048KG984504R",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "451",
    "payments": [
      {
        "id": "sql-payment-order-451",
        "date": "2022-04-01",
        "method": "Apple Pay",
        "reference": "Offline",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "452",
    "payments": [
      {
        "id": "sql-payment-order-452",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "0EG20955XP776390G",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "453",
    "payments": [
      {
        "id": "sql-payment-order-453",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "65405265CB6629925",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "454",
    "payments": [
      {
        "id": "sql-payment-order-454",
        "date": "2022-04-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "456",
    "payments": [
      {
        "id": "sql-payment-order-456",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "",
        "amount": 63.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "457",
    "payments": [
      {
        "id": "sql-payment-order-457",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "458",
    "payments": [
      {
        "id": "sql-payment-order-458",
        "date": "2022-04-01",
        "method": "PayPal",
        "reference": "",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "459",
    "payments": [
      {
        "id": "sql-payment-order-459",
        "date": "2022-04-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "460",
    "payments": [
      {
        "id": "sql-payment-order-460",
        "date": "2022-04-02",
        "method": "PayPal",
        "reference": "2MC15201A0350931U",
        "amount": 52.88
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "461",
    "payments": [
      {
        "id": "sql-payment-order-461",
        "date": "2022-04-02",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "462",
    "payments": [
      {
        "id": "sql-payment-order-462",
        "date": "2022-04-02",
        "method": "PayPal",
        "reference": "21J237737T754660P",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "463",
    "payments": [
      {
        "id": "sql-payment-order-463",
        "date": "2022-04-02",
        "method": "PayPal",
        "reference": "620405360N8607115",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "464",
    "payments": [
      {
        "id": "sql-payment-order-464",
        "date": "2022-04-02",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "465",
    "payments": [
      {
        "id": "sql-payment-order-465",
        "date": "2022-04-03",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 31.8
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "466",
    "payments": [
      {
        "id": "sql-payment-order-466",
        "date": "2022-04-03",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "467",
    "payments": [
      {
        "id": "sql-payment-order-467",
        "date": "2022-04-07",
        "method": "Check",
        "reference": "Offline",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "468",
    "payments": [
      {
        "id": "sql-payment-order-468",
        "date": "2022-04-02",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "469",
    "payments": [
      {
        "id": "sql-payment-order-469",
        "date": "2022-04-07",
        "method": "PayPal",
        "reference": "25713018AL521050L",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "471",
    "payments": [
      {
        "id": "sql-payment-order-471",
        "date": "2022-04-10",
        "method": "PayPal",
        "reference": "80P63747LT493825F",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "472",
    "payments": [
      {
        "id": "sql-payment-order-472",
        "date": "2022-04-10",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "474",
    "payments": [
      {
        "id": "sql-payment-order-474",
        "date": "2022-04-10",
        "method": "PayPal",
        "reference": "6TP37474S97424825",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "475",
    "payments": [
      {
        "id": "sql-payment-order-475",
        "date": "2022-04-13",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "476",
    "payments": [
      {
        "id": "sql-payment-order-476",
        "date": "2022-04-13",
        "method": "Cash App",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "478",
    "payments": [
      {
        "id": "sql-payment-schedule-190",
        "date": "2022-04-20",
        "method": "Cash App",
        "reference": "",
        "amount": 858.6
      },
      {
        "id": "sql-payment-schedule-191",
        "date": "2023-03-02",
        "method": "Check",
        "reference": "83000",
        "amount": 3863.7
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-353",
        "date": "2022-04-20",
        "description": "Meggy Lynn Combine Kick Back",
        "amount": 100.0,
        "category": "commission",
        "reference": ""
      },
      {
        "id": "sql-expense-506",
        "date": "2023-07-22",
        "description": "Ashlyn second shooter",
        "amount": 270.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-517",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "479",
    "payments": [
      {
        "id": "sql-payment-order-479",
        "date": "2022-04-13",
        "method": "Venmo",
        "reference": "",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "481",
    "payments": [
      {
        "id": "sql-payment-schedule-188",
        "date": "2022-04-27",
        "method": "Venmo",
        "reference": "",
        "amount": 265.0
      },
      {
        "id": "sql-payment-schedule-189",
        "date": "2023-06-22",
        "method": "Check",
        "reference": "",
        "amount": 1010.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "482",
    "payments": [
      {
        "id": "sql-payment-order-482",
        "date": "2022-04-16",
        "method": "PayPal",
        "reference": "9S055877MY8750101",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "483",
    "payments": [
      {
        "id": "sql-payment-order-483",
        "date": "2022-04-16",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 31.8
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "484",
    "payments": [
      {
        "id": "sql-payment-order-484",
        "date": "2022-04-17",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 31.8
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "485",
    "payments": [
      {
        "id": "sql-payment-order-485",
        "date": "2022-04-18",
        "method": "PayPal",
        "reference": "0DM87613GX288880N",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "486",
    "payments": [
      {
        "id": "sql-payment-order-486",
        "date": "2022-04-19",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "487",
    "payments": [
      {
        "id": "sql-payment-order-487",
        "date": "2022-04-19",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "488",
    "payments": [
      {
        "id": "sql-payment-order-488",
        "date": "2022-04-20",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "489",
    "payments": [
      {
        "id": "sql-payment-order-489",
        "date": "2022-04-24",
        "method": "Cash App",
        "reference": "Offline",
        "amount": 21.15
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "490",
    "payments": [
      {
        "id": "sql-payment-order-490",
        "date": "2022-04-24",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 10.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "491",
    "payments": [
      {
        "id": "sql-payment-order-491",
        "date": "2022-04-25",
        "method": "PayPal - instant",
        "reference": "3B651511KS515711D",
        "amount": 42.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-355",
        "date": "2022-04-25",
        "description": "Order #491 expense",
        "amount": 1.97,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "492",
    "payments": [
      {
        "id": "sql-payment-order-492",
        "date": "2022-04-25",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.15
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "493",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-356",
        "date": "2022-04-25",
        "description": "Order #493 expense",
        "amount": 3.45,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "494",
    "payments": [
      {
        "id": "sql-payment-schedule-202",
        "date": "2022-04-25",
        "method": "PayPal",
        "reference": "3W934121MD4762817",
        "amount": 84.8
      },
      {
        "id": "sql-payment-schedule-203",
        "date": "2022-10-24",
        "method": "Venmo",
        "reference": "3656225755715951722",
        "amount": 551.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-368",
        "date": "2022-04-25",
        "description": "3W934121MD4762817",
        "amount": 3.45,
        "category": "Processing",
        "reference": "3W934121MD4762817"
      },
      {
        "id": "sql-expense-455",
        "date": "2022-10-24",
        "description": "Breanna Gassner Photo Booth",
        "amount": 551.2,
        "category": "commission",
        "reference": "3656229898396255047"
      }
    ]
  },
  {
    "orderNumber": "496",
    "payments": [
      {
        "id": "sql-payment-order-496",
        "date": "2022-04-25",
        "method": "Venmo",
        "reference": "",
        "amount": 650.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "500",
    "payments": [
      {
        "id": "sql-payment-schedule-194",
        "date": "2022-04-26",
        "method": "Venmo",
        "reference": "",
        "amount": 519.4
      },
      {
        "id": "sql-payment-schedule-195",
        "date": "2023-05-20",
        "method": "Check",
        "reference": "2130",
        "amount": 2077.6
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-500",
        "date": "2023-07-05",
        "description": "8C751423UR098380J",
        "amount": 200.0,
        "category": "editor",
        "reference": "8C751423UR098380J"
      }
    ]
  },
  {
    "orderNumber": "501",
    "payments": [
      {
        "id": "sql-payment-order-501",
        "date": "2022-04-27",
        "method": "Venmo",
        "reference": "3525473689885527963",
        "amount": 31.73
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "502",
    "payments": [
      {
        "id": "sql-payment-order-502",
        "date": "2022-07-10",
        "method": "Cash",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "503",
    "payments": [
      {
        "id": "sql-payment-order-503",
        "date": "2022-04-27",
        "method": "PayPal - instant",
        "reference": "2HK710274H896332M",
        "amount": 10.6
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-359",
        "date": "2022-04-27",
        "description": "Order #503 expense",
        "amount": 0.86,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "505",
    "payments": [
      {
        "id": "sql-payment-schedule-196",
        "date": "2022-04-27",
        "method": "Apple Pay",
        "reference": "",
        "amount": 602.78
      },
      {
        "id": "sql-payment-schedule-197",
        "date": "2022-07-30",
        "method": "Cash",
        "reference": "",
        "amount": 2350.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-407",
        "date": "2022-07-30",
        "description": "Breanna Lilly Creative - $100 Cash",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-478",
        "date": "2022-12-30",
        "description": "Album Refund",
        "amount": 450.0,
        "category": "Refund",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "506",
    "payments": [
      {
        "id": "sql-payment-order-506",
        "date": "2022-04-29",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "507",
    "payments": [
      {
        "id": "sql-payment-order-507",
        "date": "2022-04-29",
        "method": "Cash App",
        "reference": "Offline",
        "amount": 105.75
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "508",
    "payments": [
      {
        "id": "sql-payment-order-508",
        "date": "2022-04-29",
        "method": "PayPal - instant",
        "reference": "8GX301768J589125V",
        "amount": 10.6
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-361",
        "date": "2022-04-29",
        "description": "Order #508 expense",
        "amount": 0.86,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "509",
    "payments": [
      {
        "id": "sql-payment-order-509",
        "date": "2022-04-29",
        "method": "PayPal - instant",
        "reference": "35X07491X44018309",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-362",
        "date": "2022-04-29",
        "description": "Order #509 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "511",
    "payments": [
      {
        "id": "sql-payment-order-511",
        "date": "2022-04-29",
        "method": "Zelle",
        "reference": "Offline",
        "amount": 53.75
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "512",
    "payments": [
      {
        "id": "sql-payment-order-512",
        "date": "2022-04-29",
        "method": "Venmo",
        "reference": "",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "513",
    "payments": [
      {
        "id": "sql-payment-order-513",
        "date": "2022-04-29",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "514",
    "payments": [
      {
        "id": "sql-payment-order-514",
        "date": "2022-04-30",
        "method": "PayPal - instant",
        "reference": "0U8131196F333734J",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-363",
        "date": "2022-04-30",
        "description": "Order #514 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "515",
    "payments": [
      {
        "id": "sql-payment-order-515",
        "date": "2022-04-30",
        "method": "PayPal - instant",
        "reference": "7G492314280956454",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-364",
        "date": "2022-04-30",
        "description": "Order #515 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "516",
    "payments": [
      {
        "id": "sql-payment-order-516",
        "date": "2022-04-30",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 53.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "517",
    "payments": [
      {
        "id": "sql-payment-order-517",
        "date": "2022-04-30",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "519",
    "payments": [
      {
        "id": "sql-payment-schedule-207",
        "date": "2022-05-12",
        "method": "Check",
        "reference": "",
        "amount": 591.48
      },
      {
        "id": "sql-payment-schedule-208",
        "date": "2022-12-31",
        "method": "Check",
        "reference": "131",
        "amount": 3055.27
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-480",
        "date": "2023-01-19",
        "description": "Video Editing - Cut Pro Media",
        "amount": 215.0,
        "category": "services",
        "reference": "2PC38800GN2472045"
      }
    ]
  },
  {
    "orderNumber": "520",
    "payments": [
      {
        "id": "sql-payment-order-520",
        "date": "2022-05-03",
        "method": "Zelle",
        "reference": "Offline",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "521",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-366",
        "date": "2022-05-04",
        "description": "Order #521 expense",
        "amount": 7.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "522",
    "payments": [
      {
        "id": "sql-payment-schedule-200",
        "date": "2022-05-04",
        "method": "PayPal - instant",
        "reference": "04520696D3958205J",
        "amount": 211.5
      },
      {
        "id": "sql-payment-schedule-201",
        "date": "2022-05-28",
        "method": "PayPal",
        "reference": "",
        "amount": 352.0
      },
      {
        "id": "sql-payment-schedule-222",
        "date": "2022-08-05",
        "method": "PayPal",
        "reference": "85D63095405790201",
        "amount": 494.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-367",
        "date": "2022-05-04",
        "description": "04520696D3958205J",
        "amount": 7.87,
        "category": "Processing",
        "reference": "04520696D3958205J"
      },
      {
        "id": "sql-expense-410",
        "date": "2022-08-05",
        "description": "85D63095405790201",
        "amount": 14.77,
        "category": "Processing",
        "reference": "85D63095405790201"
      }
    ]
  },
  {
    "orderNumber": "523",
    "payments": [
      {
        "id": "sql-payment-schedule-198",
        "date": "2021-10-08",
        "method": "Venmo",
        "reference": "",
        "amount": 148.2
      },
      {
        "id": "sql-payment-schedule-199",
        "date": "2022-09-09",
        "method": "Cash",
        "reference": "",
        "amount": 1601.8
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "527",
    "payments": [
      {
        "id": "sql-payment-schedule-205",
        "date": "2022-05-08",
        "method": "Venmo",
        "reference": "",
        "amount": 509.0
      },
      {
        "id": "sql-payment-schedule-206",
        "date": "2023-07-25",
        "method": "Venmo",
        "reference": "3854811100525673926",
        "amount": 1611.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-516",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "530",
    "payments": [
      {
        "id": "sql-payment-order-530",
        "date": "2022-07-18",
        "method": "Check",
        "reference": "317749",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "532",
    "payments": [
      {
        "id": "sql-payment-schedule-211",
        "date": "2022-05-16",
        "method": "Check",
        "reference": "",
        "amount": 689.0
      },
      {
        "id": "sql-payment-schedule-212",
        "date": "2023-06-16",
        "method": "Check",
        "reference": "",
        "amount": 3286.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-501",
        "date": "2023-07-05",
        "description": "8C751423UR098380J",
        "amount": 200.0,
        "category": "editor",
        "reference": "8C751423UR098380J"
      }
    ]
  },
  {
    "orderNumber": "533",
    "payments": [
      {
        "id": "sql-payment-order-533",
        "date": "2022-10-01",
        "method": "PayPal - instant",
        "reference": "0YJ73135T0671124M",
        "amount": 53.05
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-441",
        "date": "2022-10-01",
        "description": "Order #533 expense",
        "amount": 2.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "534",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-369",
        "date": "2022-05-14",
        "description": "Order #534 expense",
        "amount": 15.25,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "535",
    "payments": [
      {
        "id": "sql-payment-schedule-209",
        "date": "2022-05-14",
        "method": "PayPal",
        "reference": "6X326265P90115926",
        "amount": 423.0
      },
      {
        "id": "sql-payment-schedule-210",
        "date": "2023-01-18",
        "method": "Venmo",
        "reference": "3718713733758998265",
        "amount": 1692.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-370",
        "date": "2022-05-14",
        "description": "6X326265P90115926",
        "amount": 15.25,
        "category": "Processing",
        "reference": "6X326265P90115926"
      }
    ]
  },
  {
    "orderNumber": "537",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-371",
        "date": "2022-05-16",
        "description": "Order #537 expense",
        "amount": 16.77,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "538",
    "payments": [
      {
        "id": "sql-payment-schedule-213",
        "date": "2022-05-16",
        "method": "PayPal",
        "reference": "8HD78454BK314773W",
        "amount": 466.4
      },
      {
        "id": "sql-payment-schedule-214",
        "date": "2023-09-11",
        "method": "Venmo",
        "reference": "3889576788523816026",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-324",
        "date": "2023-09-14",
        "method": "Venmo",
        "reference": "3892117847523205249",
        "amount": 865.6
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-372",
        "date": "2022-05-16",
        "description": "8HD78454BK314773W",
        "amount": 16.77,
        "category": "Processing",
        "reference": "8HD78454BK314773W"
      },
      {
        "id": "sql-expense-521",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "540",
    "payments": [
      {
        "id": "sql-payment-schedule-215",
        "date": "2022-05-17",
        "method": "Zelle",
        "reference": "",
        "amount": 735.0
      },
      {
        "id": "sql-payment-schedule-216",
        "date": "2022-07-31",
        "method": "Zelle",
        "reference": "PNCAA0BnC58G",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "541",
    "payments": [
      {
        "id": "sql-payment-order-541",
        "date": "2022-07-03",
        "method": "Check",
        "reference": "Offline",
        "amount": 878.92
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "543",
    "payments": [
      {
        "id": "sql-payment-schedule-217",
        "date": "2022-05-18",
        "method": "Venmo",
        "reference": "",
        "amount": 620.6
      },
      {
        "id": "sql-payment-schedule-218",
        "date": "2022-07-25",
        "method": "Venmo",
        "reference": "3590432490899444965",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-237",
        "date": "2022-08-28",
        "method": "Venmo",
        "reference": "3614878135739466387",
        "amount": 1482.4
      },
      {
        "id": "sql-payment-schedule-275",
        "date": "2022-10-27",
        "method": "Venmo",
        "reference": "3658644403861214670",
        "amount": 300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-473",
        "date": "2022-12-01",
        "description": "Video Edit",
        "amount": 200.0,
        "category": "commission",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "546",
    "payments": [
      {
        "id": "sql-payment-schedule-220",
        "date": "2022-05-24",
        "method": "Zelle",
        "reference": "",
        "amount": 946.0
      },
      {
        "id": "sql-payment-schedule-221",
        "date": "2023-05-15",
        "method": "Zelle",
        "reference": "JPM999wmgnkw",
        "amount": 4665.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-498",
        "date": "2023-07-05",
        "description": "8C751423UR098380J",
        "amount": 200.0,
        "category": "editor",
        "reference": "8C751423UR098380J"
      }
    ]
  },
  {
    "orderNumber": "547",
    "payments": [
      {
        "id": "sql-payment-order-547",
        "date": "2022-05-24",
        "method": "PayPal - instant",
        "reference": "5JU68330H3723254L",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-373",
        "date": "2022-05-24",
        "description": "Order #547 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "548",
    "payments": [
      {
        "id": "sql-payment-order-548",
        "date": "2022-06-19",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "549",
    "payments": [
      {
        "id": "sql-payment-order-549",
        "date": "2022-06-02",
        "method": "Direct Deposit",
        "reference": "",
        "amount": 327.04
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "550",
    "payments": [
      {
        "id": "sql-payment-order-550",
        "date": "2022-06-06",
        "method": "PayPal - instant",
        "reference": "5V8475188K587342P",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-375",
        "date": "2022-06-06",
        "description": "Order #550 expense",
        "amount": 3.98,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "551",
    "payments": [
      {
        "id": "sql-payment-order-551",
        "date": "2022-06-09",
        "method": "PayPal - instant",
        "reference": "3D82947864825171J",
        "amount": 25.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-376",
        "date": "2022-06-09",
        "description": "Order #551 expense",
        "amount": 1.36,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "552",
    "payments": [
      {
        "id": "sql-payment-order-552",
        "date": "2022-06-09",
        "method": "PayPal - instant",
        "reference": "680244367B675473T",
        "amount": 25.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-377",
        "date": "2022-06-09",
        "description": "Order #552 expense",
        "amount": 1.36,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "553",
    "payments": [
      {
        "id": "sql-payment-order-553",
        "date": "2022-06-15",
        "method": "Check",
        "reference": "855",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "554",
    "payments": [
      {
        "id": "sql-payment-order-554",
        "date": "2022-06-11",
        "method": "PayPal - instant",
        "reference": "0CM85266TM895304U",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-378",
        "date": "2022-06-11",
        "description": "Order #554 expense",
        "amount": 3.98,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "555",
    "payments": [
      {
        "id": "sql-payment-order-555",
        "date": "2022-06-12",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "556",
    "payments": [
      {
        "id": "sql-payment-order-556",
        "date": "2022-06-12",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 25.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "558",
    "payments": [
      {
        "id": "sql-payment-order-558",
        "date": "2022-06-12",
        "method": "PayPal - instant",
        "reference": "7H1916384C9628340",
        "amount": 250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-379",
        "date": "2022-06-12",
        "description": "Order #558 expense",
        "amount": 9.22,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "560",
    "payments": [
      {
        "id": "sql-payment-order-560",
        "date": "2022-06-12",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "561",
    "payments": [
      {
        "id": "sql-payment-order-561",
        "date": "2022-06-13",
        "method": "PayPal - instant",
        "reference": "27M697953B578522K",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-380",
        "date": "2022-06-13",
        "description": "Order #561 expense",
        "amount": 2.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "562",
    "payments": [
      {
        "id": "sql-payment-order-562",
        "date": "2022-06-14",
        "method": "PayPal - instant",
        "reference": "1K665846FL562494B",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-381",
        "date": "2022-06-14",
        "description": "Order #562 expense",
        "amount": 2.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "563",
    "payments": [
      {
        "id": "sql-payment-order-563",
        "date": "2022-06-14",
        "method": "Venmo",
        "reference": "3560748914205727752",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "564",
    "payments": [
      {
        "id": "sql-payment-order-564",
        "date": "2022-08-14",
        "method": "Cash App",
        "reference": "",
        "amount": 251.75
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "566",
    "payments": [
      {
        "id": "sql-payment-order-566",
        "date": "2022-06-18",
        "method": "Venmo",
        "reference": "",
        "amount": 600.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "568",
    "payments": [
      {
        "id": "sql-payment-order-568",
        "date": "2022-07-09",
        "method": "Venmo",
        "reference": "3578939198353611242",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-384",
        "date": "2022-07-09",
        "description": "Venmo goods and service",
        "amount": 11.95,
        "category": "venmo fees",
        "reference": "3578939198353611242"
      }
    ]
  },
  {
    "orderNumber": "571",
    "payments": [
      {
        "id": "sql-payment-order-571",
        "date": "2022-07-12",
        "method": "PayPal - instant",
        "reference": "8HU31308H1160181K",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-385",
        "date": "2022-07-12",
        "description": "Order #571 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "572",
    "payments": [
      {
        "id": "sql-payment-order-572",
        "date": "2022-07-13",
        "method": "Venmo",
        "reference": "3581828519767552278",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "574",
    "payments": [
      {
        "id": "sql-payment-schedule-230",
        "date": "2022-07-13",
        "method": "Venmo",
        "reference": "3581857273944559435",
        "amount": 275.6
      },
      {
        "id": "sql-payment-schedule-231",
        "date": "2023-04-08",
        "method": "Cash",
        "reference": "",
        "amount": 3900.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-493",
        "date": "2023-04-11",
        "description": "Overpaid. Refund via Venmo",
        "amount": 275.6,
        "category": "Refund",
        "reference": "3778632718487224298"
      },
      {
        "id": "sql-expense-495",
        "date": "2023-06-24",
        "description": "Breanna Cash",
        "amount": 200.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-518",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "576",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-387",
        "date": "2022-07-16",
        "description": "Order #576 expense",
        "amount": 35.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "577",
    "payments": [
      {
        "id": "sql-payment-schedule-233",
        "date": "2022-07-16",
        "method": "PayPal",
        "reference": "7KU93707MD582291D",
        "amount": 996.4
      },
      {
        "id": "sql-payment-schedule-234",
        "date": "2023-07-20",
        "method": "PayPal",
        "reference": "0VW821930N623015H",
        "amount": 4727.6
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-388",
        "date": "2022-07-16",
        "description": "7KU93707MD582291D",
        "amount": 35.26,
        "category": "Processing",
        "reference": "7KU93707MD582291D"
      },
      {
        "id": "sql-expense-505",
        "date": "2023-07-20",
        "description": "0VW821930N623015H",
        "amount": 141.36,
        "category": "Processing",
        "reference": "0VW821930N623015H"
      },
      {
        "id": "sql-expense-520",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "579",
    "payments": [
      {
        "id": "sql-payment-order-579",
        "date": "2022-09-14",
        "method": "Check",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "580",
    "payments": [
      {
        "id": "sql-payment-order-580",
        "date": "2022-07-25",
        "method": "PayPal - instant",
        "reference": "5WU921719M354194K",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-402",
        "date": "2022-07-25",
        "description": "Order #580 expense",
        "amount": 6.04,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "584",
    "payments": [
      {
        "id": "sql-payment-schedule-243",
        "date": "2022-08-02",
        "method": "Venmo",
        "reference": "3596360854373700857",
        "amount": 212.0
      },
      {
        "id": "sql-payment-schedule-244",
        "date": "2023-04-05",
        "method": "Venmo",
        "reference": "3774482462019305361",
        "amount": 1484.0
      },
      {
        "id": "sql-payment-schedule-321",
        "date": "2023-07-11",
        "method": "Venmo",
        "reference": "3844673421931036059",
        "amount": 318.0
      },
      {
        "id": "sql-payment-schedule-325",
        "date": "2023-09-26",
        "method": "Venmo",
        "reference": "3900758231908423002",
        "amount": 477.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-512",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "586",
    "payments": [
      {
        "id": "sql-payment-schedule-264",
        "date": "2022-08-19",
        "method": "Cash",
        "reference": "",
        "amount": 240.0
      },
      {
        "id": "sql-payment-schedule-265",
        "date": "2022-09-03",
        "method": "Cash",
        "reference": "",
        "amount": 1200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "587",
    "payments": [
      {
        "id": "sql-payment-order-587",
        "date": "2022-08-14",
        "method": "Check",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "591",
    "payments": [
      {
        "id": "sql-payment-schedule-248",
        "date": "2022-08-09",
        "method": "Venmo",
        "reference": "3601430279687108529",
        "amount": 127.2
      },
      {
        "id": "sql-payment-schedule-249",
        "date": "2023-05-17",
        "method": "Venmo",
        "reference": "3805060045374548568",
        "amount": 509.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "592",
    "payments": [
      {
        "id": "sql-payment-order-592",
        "date": "2022-08-17",
        "method": "Check",
        "reference": "152",
        "amount": 318.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "595",
    "payments": [
      {
        "id": "sql-payment-order-595",
        "date": "2022-09-18",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "597",
    "payments": [
      {
        "id": "sql-payment-schedule-252",
        "date": "2022-08-19",
        "method": "Cash",
        "reference": "",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-253",
        "date": "2023-01-11",
        "method": "Cash",
        "reference": "",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-285",
        "date": "2023-04-27",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-309",
        "date": "2023-07-26",
        "method": "Cash",
        "reference": "",
        "amount": 2600.0
      },
      {
        "id": "sql-payment-schedule-323",
        "date": "2023-08-03",
        "method": "Cash",
        "reference": "",
        "amount": 1550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-423",
        "date": "2022-08-23",
        "description": "Derrek Smith",
        "amount": 250.0,
        "category": "commission",
        "reference": ""
      },
      {
        "id": "sql-expense-519",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "598",
    "payments": [
      {
        "id": "sql-payment-order-598",
        "date": "2022-08-21",
        "method": "PayPal - instant",
        "reference": "1PX48798330266606",
        "amount": 371.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-420",
        "date": "2022-08-21",
        "description": "Order #598 expense",
        "amount": 13.44,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "601",
    "payments": [
      {
        "id": "sql-payment-schedule-258",
        "date": "2022-08-26",
        "method": "PayPal",
        "reference": "48482819RC215210M",
        "amount": 180.2
      },
      {
        "id": "sql-payment-schedule-259",
        "date": "2022-12-12",
        "method": "Venmo",
        "reference": "3692105277438683469",
        "amount": 720.8
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-481",
        "date": "2023-01-19",
        "description": "Video Editing - Cut Pro Media",
        "amount": 215.0,
        "category": "services",
        "reference": "2PC38800GN2472045"
      }
    ]
  },
  {
    "orderNumber": "602",
    "payments": [
      {
        "id": "sql-payment-order-602",
        "date": "2022-08-28",
        "method": "PayPal - instant",
        "reference": "8X279447V47883406",
        "amount": 636.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-426",
        "date": "2022-08-28",
        "description": "Order #602 expense",
        "amount": 22.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "604",
    "payments": [
      {
        "id": "sql-payment-order-604",
        "date": "2022-09-17",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 250.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "607",
    "payments": [
      {
        "id": "sql-payment-schedule-262",
        "date": "2022-09-04",
        "method": "Zelle",
        "reference": "PNCAA0CIJ99Q",
        "amount": 800.0
      },
      {
        "id": "sql-payment-schedule-263",
        "date": "2023-05-24",
        "method": "Zelle",
        "reference": "PNCAA0FWd60O",
        "amount": 2500.0
      },
      {
        "id": "sql-payment-schedule-311",
        "date": "2023-05-27",
        "method": "Zelle",
        "reference": "PNCAA0FYj38K",
        "amount": 622.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-499",
        "date": "2023-07-05",
        "description": "8C751423UR098380J",
        "amount": 200.0,
        "category": "editor",
        "reference": "8C751423UR098380J"
      }
    ]
  },
  {
    "orderNumber": "612",
    "payments": [
      {
        "id": "sql-payment-schedule-268",
        "date": "2022-09-16",
        "method": "Check",
        "reference": "103",
        "amount": 593.6
      },
      {
        "id": "sql-payment-schedule-269",
        "date": "2023-08-11",
        "method": "Venmo",
        "reference": "3867091442985084329",
        "amount": 2374.4
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "613",
    "payments": [
      {
        "id": "sql-payment-order-613",
        "date": "2022-09-13",
        "method": "PayPal",
        "reference": "8HT881185S6092204",
        "amount": 875.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-431",
        "date": "2022-09-13",
        "description": "8HT881185S6092204",
        "amount": 26.16,
        "category": "Processing",
        "reference": "8HT881185S6092204"
      }
    ]
  },
  {
    "orderNumber": "614",
    "payments": [
      {
        "id": "sql-payment-order-614",
        "date": "2022-09-13",
        "method": "PayPal",
        "reference": "73E48733B4102044E",
        "amount": 175.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-432",
        "date": "2022-09-13",
        "description": "73E48733B4102044E",
        "amount": 5.23,
        "category": "Processing",
        "reference": "73E48733B4102044E"
      }
    ]
  },
  {
    "orderNumber": "615",
    "payments": [
      {
        "id": "sql-payment-order-615",
        "date": "2022-09-13",
        "method": "PayPal",
        "reference": "9D028284R79954523",
        "amount": 1275.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-433",
        "date": "2022-09-13",
        "description": "9D028284R79954523",
        "amount": 38.12,
        "category": "Processing",
        "reference": "9D028284R79954523"
      }
    ]
  },
  {
    "orderNumber": "616",
    "payments": [
      {
        "id": "sql-payment-order-616",
        "date": "2022-09-14",
        "method": "PayPal",
        "reference": "7RY00880T9158925F",
        "amount": 1025.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-434",
        "date": "2022-09-14",
        "description": "7RY00880T9158925F",
        "amount": 30.65,
        "category": "Processing",
        "reference": "7RY00880T9158925F"
      }
    ]
  },
  {
    "orderNumber": "617",
    "payments": [
      {
        "id": "sql-payment-order-617",
        "date": "2022-10-11",
        "method": "Check",
        "reference": "5315",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "618",
    "payments": [
      {
        "id": "sql-payment-order-618",
        "date": "2022-09-19",
        "method": "PayPal - instant",
        "reference": "3DR68299BN578972J",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-436",
        "date": "2022-09-19",
        "description": "Order #618 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "623",
    "payments": [
      {
        "id": "sql-payment-schedule-270",
        "date": "2022-09-22",
        "method": "Zelle",
        "reference": "PNCAA0CTM62H",
        "amount": 63.45
      },
      {
        "id": "sql-payment-schedule-271",
        "date": "2023-01-01",
        "method": "Zelle",
        "reference": "PNCAA0DeZ07z",
        "amount": 1015.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "624",
    "payments": [
      {
        "id": "sql-payment-schedule-272",
        "date": "2022-09-22",
        "method": "Venmo",
        "reference": "3633151941231197618",
        "amount": 63.6
      },
      {
        "id": "sql-payment-schedule-273",
        "date": "2023-07-11",
        "method": "Venmo",
        "reference": "3844623437412297602",
        "amount": 2003.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-437",
        "date": "2022-09-23",
        "description": "Breanna",
        "amount": 63.6,
        "category": "second shooter",
        "reference": "3633407591332279958"
      },
      {
        "id": "sql-expense-504",
        "date": "2023-07-11",
        "description": "Breanna shooting wedding",
        "amount": 2003.4,
        "category": "second shooter",
        "reference": "3844625823241578776"
      }
    ]
  },
  {
    "orderNumber": "625",
    "payments": [
      {
        "id": "sql-payment-order-625",
        "date": "2022-09-24",
        "method": "PayPal",
        "reference": "1BT244888A477335M",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-439",
        "date": "2022-09-24",
        "description": "1BT244888A477335M",
        "amount": 1.61,
        "category": "Processing",
        "reference": "1BT244888A477335M"
      }
    ]
  },
  {
    "orderNumber": "627",
    "payments": [
      {
        "id": "sql-payment-order-627",
        "date": "2022-11-23",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "628",
    "payments": [
      {
        "id": "sql-payment-order-628",
        "date": "2022-10-07",
        "method": "PayPal - instant",
        "reference": "9EB2874694998662L",
        "amount": 265.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-442",
        "date": "2022-10-07",
        "description": "Order #628 expense",
        "amount": 9.74,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "629",
    "payments": [
      {
        "id": "sql-payment-order-629",
        "date": "2022-10-19",
        "method": "PayPal",
        "reference": "30M11384BC647361D",
        "amount": 90.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-450",
        "date": "2022-10-19",
        "description": "30M11384BC647361D",
        "amount": 2.69,
        "category": "Processing",
        "reference": "30M11384BC647361D"
      }
    ]
  },
  {
    "orderNumber": "630",
    "payments": [
      {
        "id": "sql-payment-order-630",
        "date": "2022-10-21",
        "method": "PayPal - instant",
        "reference": "20279901T5974742R",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-452",
        "date": "2022-10-21",
        "description": "Order #630 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "633",
    "payments": [
      {
        "id": "sql-payment-order-633",
        "date": "2022-10-03",
        "method": "Direct Deposit",
        "reference": "5608301872617070",
        "amount": 195.91
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "634",
    "payments": [
      {
        "id": "sql-payment-order-634",
        "date": "2022-10-11",
        "method": "Direct Deposit",
        "reference": "18402344",
        "amount": 93.61
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "635",
    "payments": [
      {
        "id": "sql-payment-order-635",
        "date": "2022-10-08",
        "method": "Direct Deposit",
        "reference": "5460587897388470",
        "amount": 136.63
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "636",
    "payments": [
      {
        "id": "sql-payment-order-636",
        "date": "2022-05-10",
        "method": "Direct Deposit",
        "reference": "30625615",
        "amount": 219.14
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "637",
    "payments": [
      {
        "id": "sql-payment-order-637",
        "date": "2022-04-10",
        "method": "Direct Deposit",
        "reference": "29613653",
        "amount": 107.9
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "638",
    "payments": [
      {
        "id": "sql-payment-order-638",
        "date": "2022-10-30",
        "method": "Venmo",
        "reference": "3660542039857738624",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "639",
    "payments": [
      {
        "id": "sql-payment-order-639",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "13896201WC834070H",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-456",
        "date": "2022-10-25",
        "description": "Order #639 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "641",
    "payments": [
      {
        "id": "sql-payment-order-641",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "6N376855TP490340S",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-457",
        "date": "2022-10-25",
        "description": "Order #641 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "642",
    "payments": [
      {
        "id": "sql-payment-order-642",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657251352709792519",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "644",
    "payments": [
      {
        "id": "sql-payment-order-644",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657256362210152670",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "645",
    "payments": [
      {
        "id": "sql-payment-order-645",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657263164264366337",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "646",
    "payments": [
      {
        "id": "sql-payment-order-646",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "12T35189WG689521V",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-458",
        "date": "2022-10-25",
        "description": "Order #646 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "647",
    "payments": [
      {
        "id": "sql-payment-order-647",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "648",
    "payments": [
      {
        "id": "sql-payment-order-648",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "649",
    "payments": [
      {
        "id": "sql-payment-order-649",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657296171733936022",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "650",
    "payments": [
      {
        "id": "sql-payment-order-650",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657282887852918428",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "651",
    "payments": [
      {
        "id": "sql-payment-order-651",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657283137674601202",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "652",
    "payments": [
      {
        "id": "sql-payment-order-652",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "653",
    "payments": [
      {
        "id": "sql-payment-order-653",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657296171733936022",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "654",
    "payments": [
      {
        "id": "sql-payment-order-654",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657288639157888720",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "655",
    "payments": [
      {
        "id": "sql-payment-order-655",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "894175355T155471B",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-459",
        "date": "2022-10-25",
        "description": "Order #655 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "656",
    "payments": [
      {
        "id": "sql-payment-order-656",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "21R44414JB9335621",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-460",
        "date": "2022-10-25",
        "description": "Order #656 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "657",
    "payments": [
      {
        "id": "sql-payment-order-657",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "658",
    "payments": [
      {
        "id": "sql-payment-order-658",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657293383486309634",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "659",
    "payments": [
      {
        "id": "sql-payment-order-659",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "660",
    "payments": [
      {
        "id": "sql-payment-order-660",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657512258718738446",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "661",
    "payments": [
      {
        "id": "sql-payment-order-661",
        "date": "2022-10-25",
        "method": "PayPal - instant",
        "reference": "8CN77805SG511353Y",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-461",
        "date": "2022-10-25",
        "description": "Order #661 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "662",
    "payments": [
      {
        "id": "sql-payment-order-662",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657296334573223770",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "663",
    "payments": [
      {
        "id": "sql-payment-order-663",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "664",
    "payments": [
      {
        "id": "sql-payment-order-664",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "665",
    "payments": [
      {
        "id": "sql-payment-order-665",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "666",
    "payments": [
      {
        "id": "sql-payment-order-666",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "667",
    "payments": [
      {
        "id": "sql-payment-order-667",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657577419454959469",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "668",
    "payments": [
      {
        "id": "sql-payment-order-668",
        "date": "2022-10-25",
        "method": "Venmo",
        "reference": "3657596098821426838",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "669",
    "payments": [
      {
        "id": "sql-payment-order-669",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "670",
    "payments": [
      {
        "id": "sql-payment-order-670",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "671",
    "payments": [
      {
        "id": "sql-payment-order-671",
        "date": "2022-10-30",
        "method": "Cas",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "672",
    "payments": [
      {
        "id": "sql-payment-order-672",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657708102366396007",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "673",
    "payments": [
      {
        "id": "sql-payment-order-673",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657809168734762501",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "674",
    "payments": [
      {
        "id": "sql-payment-order-674",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "675",
    "payments": [
      {
        "id": "sql-payment-order-675",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "676",
    "payments": [
      {
        "id": "sql-payment-order-676",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657934085602361300",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "677",
    "payments": [
      {
        "id": "sql-payment-order-677",
        "date": "2022-10-26",
        "method": "PayPal - instant",
        "reference": "388954278P264333D",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-464",
        "date": "2022-10-26",
        "description": "Order #677 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "678",
    "payments": [
      {
        "id": "sql-payment-order-678",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "679",
    "payments": [
      {
        "id": "sql-payment-order-679",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "680",
    "payments": [
      {
        "id": "sql-payment-order-680",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "681",
    "payments": [
      {
        "id": "sql-payment-order-681",
        "date": "2022-10-26",
        "method": "PayPal - instant",
        "reference": "6HU38254UJ216283U",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-465",
        "date": "2022-10-26",
        "description": "Order #681 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "682",
    "payments": [
      {
        "id": "sql-payment-order-682",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "683",
    "payments": [
      {
        "id": "sql-payment-order-683",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657961888351086017",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "684",
    "payments": [
      {
        "id": "sql-payment-order-684",
        "date": "2022-10-30",
        "method": "Venmo",
        "reference": "3660492159525040252",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "685",
    "payments": [
      {
        "id": "sql-payment-order-685",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "686",
    "payments": [
      {
        "id": "sql-payment-order-686",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "687",
    "payments": [
      {
        "id": "sql-payment-order-687",
        "date": "2022-10-26",
        "method": "PayPal - instant",
        "reference": "8J791444GM720773P",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-466",
        "date": "2022-10-26",
        "description": "Order #687 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "688",
    "payments": [
      {
        "id": "sql-payment-order-688",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657994489376399660",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "689",
    "payments": [
      {
        "id": "sql-payment-order-689",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "690",
    "payments": [
      {
        "id": "sql-payment-order-690",
        "date": "2022-10-26",
        "method": "Venmo",
        "reference": "3657995447783044862",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "691",
    "payments": [
      {
        "id": "sql-payment-order-691",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "692",
    "payments": [
      {
        "id": "sql-payment-order-692",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "Offline",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "693",
    "payments": [
      {
        "id": "sql-payment-order-693",
        "date": "2022-10-26",
        "method": "PayPal - instant",
        "reference": "2BP01044N7915315B",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-467",
        "date": "2022-10-26",
        "description": "Order #693 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "694",
    "payments": [
      {
        "id": "sql-payment-order-694",
        "date": "2022-10-26",
        "method": "PayPal - instant",
        "reference": "97438642HT1567547",
        "amount": 5.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-468",
        "date": "2022-10-26",
        "description": "Order #694 expense",
        "amount": 0.66,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "695",
    "payments": [
      {
        "id": "sql-payment-order-695",
        "date": "2022-11-12",
        "method": "Cash",
        "reference": "Offline",
        "amount": 170.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "696",
    "payments": [
      {
        "id": "sql-payment-order-696",
        "date": "2022-10-26",
        "method": "Cash App",
        "reference": "QY4NEYZ",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "697",
    "payments": [
      {
        "id": "sql-payment-order-697",
        "date": "2022-11-04",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "698",
    "payments": [
      {
        "id": "sql-payment-order-698",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "699",
    "payments": [
      {
        "id": "sql-payment-order-699",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "700",
    "payments": [
      {
        "id": "sql-payment-order-700",
        "date": "2022-10-30",
        "method": "Cash",
        "reference": "",
        "amount": 5.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "701",
    "payments": [
      {
        "id": "sql-payment-order-701",
        "date": "2022-11-21",
        "method": "Cash",
        "reference": "Offline",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "702",
    "payments": [
      {
        "id": "sql-payment-schedule-277",
        "date": "2022-11-04",
        "method": "Venmo",
        "reference": "3664463732804676669",
        "amount": 60.0
      },
      {
        "id": "sql-payment-schedule-278",
        "date": "2023-08-10",
        "method": "Venmo",
        "reference": "3866336037535221909",
        "amount": 1530.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "703",
    "payments": [
      {
        "id": "sql-payment-order-703",
        "date": "2022-11-07",
        "method": "PayPal",
        "reference": "97H149462U2499220",
        "amount": 159.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "704",
    "payments": [
      {
        "id": "sql-payment-order-704",
        "date": "2022-11-20",
        "method": "Venmo",
        "reference": "3675758152433942489",
        "amount": 160.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "705",
    "payments": [
      {
        "id": "sql-payment-order-705",
        "date": "2022-11-08",
        "method": "Venmo",
        "reference": "3667082656901323214",
        "amount": 40.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "706",
    "payments": [
      {
        "id": "sql-payment-order-706",
        "date": "2022-12-18",
        "method": "Cash",
        "reference": "Offline",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "708",
    "payments": [
      {
        "id": "sql-payment-order-708",
        "date": "",
        "method": "Offline",
        "reference": "Offline",
        "amount": 265.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "709",
    "payments": [
      {
        "id": "sql-payment-order-709",
        "date": "2022-11-26",
        "method": "ACH",
        "reference": "58239239077215",
        "amount": 194.8
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "711",
    "payments": [
      {
        "id": "sql-payment-order-711",
        "date": "2022-11-16",
        "method": "Venmo",
        "reference": "3672846222270994793",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "712",
    "payments": [
      {
        "id": "sql-payment-order-712",
        "date": "2023-10-08",
        "method": "Cash",
        "reference": "Offline",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "713",
    "payments": [
      {
        "id": "sql-payment-order-713",
        "date": "2022-11-17",
        "method": "PayPal - instant",
        "reference": "5BS72919UC385761C",
        "amount": 371.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-471",
        "date": "2022-11-17",
        "description": "Order #713 expense",
        "amount": 13.44,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "715",
    "payments": [
      {
        "id": "sql-payment-schedule-279",
        "date": "2022-11-22",
        "method": "Check",
        "reference": "2350917",
        "amount": 106.0
      },
      {
        "id": "sql-payment-schedule-280",
        "date": "2022-12-20",
        "method": "Check",
        "reference": "2351207",
        "amount": 318.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "717",
    "payments": [
      {
        "id": "sql-payment-schedule-281",
        "date": "2022-12-30",
        "method": "Check",
        "reference": "1252",
        "amount": 713.81
      },
      {
        "id": "sql-payment-schedule-282",
        "date": "2023-06-17",
        "method": "Check",
        "reference": "1291",
        "amount": 2855.29
      },
      {
        "id": "sql-payment-schedule-322",
        "date": "2023-07-22",
        "method": "Venmo",
        "reference": "3852654496196196598",
        "amount": 250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-502",
        "date": "2023-07-05",
        "description": "8C751423UR098380J",
        "amount": 230.0,
        "category": "editor",
        "reference": "8C751423UR098380J"
      }
    ]
  },
  {
    "orderNumber": "718",
    "payments": [
      {
        "id": "sql-payment-order-718",
        "date": "2022-12-10",
        "method": "PayPal - instant",
        "reference": "4ED060757F977145S",
        "amount": 264.38
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-477",
        "date": "2022-12-10",
        "description": "Order #718 expense",
        "amount": 9.72,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "720",
    "payments": [
      {
        "id": "sql-payment-schedule-283",
        "date": "2022-12-26",
        "method": "Cash",
        "reference": "",
        "amount": 340.0
      },
      {
        "id": "sql-payment-schedule-284",
        "date": "2025-07-30",
        "method": "Venmo",
        "reference": "4388408791148721009",
        "amount": 75.0
      },
      {
        "id": "sql-payment-schedule-475",
        "date": "2025-08-24",
        "method": "Venmo",
        "reference": "4406394806299146850",
        "amount": 50.0
      },
      {
        "id": "sql-payment-schedule-476",
        "date": "2025-10-15",
        "method": "Venmo",
        "reference": "4444246577926723536",
        "amount": 60.0
      },
      {
        "id": "sql-payment-schedule-477",
        "date": "2026-03-17",
        "method": "Venmo",
        "reference": "",
        "amount": 805.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-782",
        "date": "2025-07-09",
        "description": "Miles - 148",
        "amount": 222.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-843",
        "date": "2025-07-10",
        "description": "Breanna Gassner - Main shooter 2 hours",
        "amount": 200.0,
        "category": "second shooter",
        "reference": "4373671131670434940"
      },
      {
        "id": "sql-expense-885",
        "date": "2025-07-30",
        "description": "Order #720 expense",
        "amount": 4.5,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-912",
        "date": "2025-08-24",
        "description": "Order #720 expense",
        "amount": 3.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1009",
        "date": "2025-10-15",
        "description": "Order #720 expense",
        "amount": 3.6,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "721",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-479",
        "date": "2023-01-13",
        "description": "Order #721 expense",
        "amount": 2.71,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "723",
    "payments": [
      {
        "id": "sql-payment-schedule-286",
        "date": "2023-01-13",
        "method": "PayPal",
        "reference": "9NR20355HV134874H",
        "amount": 63.6
      },
      {
        "id": "sql-payment-schedule-287",
        "date": "2023-12-23",
        "method": "Check",
        "reference": "",
        "amount": 795.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "725",
    "payments": [
      {
        "id": "sql-payment-schedule-288",
        "date": "2023-01-17",
        "method": "Venmo",
        "reference": "3717860376932634915",
        "amount": 169.6
      },
      {
        "id": "sql-payment-schedule-289",
        "date": "2023-06-28",
        "method": "Venmo",
        "reference": "11140878741",
        "amount": 1375.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-497",
        "date": "2023-06-29",
        "description": "11140878741",
        "amount": 87.1,
        "category": "Refund",
        "reference": "11140878741"
      }
    ]
  },
  {
    "orderNumber": "728",
    "payments": [
      {
        "id": "sql-payment-schedule-290",
        "date": "2023-01-24",
        "method": "Cash",
        "reference": "",
        "amount": 212.0
      },
      {
        "id": "sql-payment-schedule-291",
        "date": "2024-09-28",
        "method": "Cash",
        "reference": "",
        "amount": 1800.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "730",
    "payments": [
      {
        "id": "sql-payment-schedule-292",
        "date": "2023-01-25",
        "method": "Venmo",
        "reference": "3723883328849782805",
        "amount": 1219.0
      },
      {
        "id": "sql-payment-schedule-293",
        "date": "2023-09-22",
        "method": "Venmo",
        "reference": "3897629927509138202",
        "amount": 5544.59
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-508",
        "date": "2023-09-22",
        "description": "3897659477395230653",
        "amount": 1000.0,
        "category": "second shooter",
        "reference": "3897659477395230653"
      },
      {
        "id": "sql-expense-515",
        "date": "2023-10-17",
        "description": "Cut Media Pro",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "732",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-482",
        "date": "2023-02-03",
        "description": "Order #732 expense",
        "amount": 15.29,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "733",
    "payments": [
      {
        "id": "sql-payment-schedule-294",
        "date": "2023-02-03",
        "method": "PayPal",
        "reference": "1AN69864J8122705W",
        "amount": 424.0
      },
      {
        "id": "sql-payment-schedule-295",
        "date": "2023-10-07",
        "method": "Cash",
        "reference": "",
        "amount": 2420.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-483",
        "date": "2023-02-03",
        "description": "1AN69864J8122705W",
        "amount": 15.29,
        "category": "Processing",
        "reference": "1AN69864J8122705W"
      }
    ]
  },
  {
    "orderNumber": "734",
    "payments": [
      {
        "id": "sql-payment-order-734",
        "date": "2023-02-08",
        "method": "PayPal",
        "reference": "2CA75320TF8049605",
        "amount": 1000.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-484",
        "date": "2023-02-08",
        "description": "2CA75320TF8049605",
        "amount": 29.9,
        "category": "Processing",
        "reference": "2CA75320TF8049605"
      }
    ]
  },
  {
    "orderNumber": "735",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-485",
        "date": "2023-02-17",
        "description": "Order #735 expense",
        "amount": 6.41,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "736",
    "payments": [
      {
        "id": "sql-payment-schedule-298",
        "date": "2023-02-17",
        "method": "PayPal",
        "reference": "72U64476BY632001M",
        "amount": 169.6
      },
      {
        "id": "sql-payment-schedule-299",
        "date": "2023-07-22",
        "method": "PayPal",
        "reference": "10J90185TC027730R",
        "amount": 678.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-488",
        "date": "2023-02-17",
        "description": "72U64476BY632001M",
        "amount": 6.41,
        "category": "Processing",
        "reference": "72U64476BY632001M"
      }
    ]
  },
  {
    "orderNumber": "737",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-486",
        "date": "2023-02-20",
        "description": "Order #737 expense",
        "amount": 5.3,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "739",
    "payments": [
      {
        "id": "sql-payment-schedule-296",
        "date": "2023-02-20",
        "method": "PayPal",
        "reference": "7ET65277WC922454R",
        "amount": 137.8
      },
      {
        "id": "sql-payment-schedule-297",
        "date": "2023-04-30",
        "method": "Zelle",
        "reference": "0DP06BRCCTYH",
        "amount": 251.2
      },
      {
        "id": "sql-payment-schedule-310",
        "date": "2023-05-20",
        "method": "Zelle",
        "reference": "0DP0PB9CIT2O",
        "amount": 300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-487",
        "date": "2023-02-21",
        "description": "7ET65277WC922454R",
        "amount": 5.3,
        "category": "Processing",
        "reference": "7ET65277WC922454R"
      }
    ]
  },
  {
    "orderNumber": "741",
    "payments": [
      {
        "id": "sql-payment-schedule-300",
        "date": "2023-06-01",
        "method": "Cash App",
        "reference": "MPB2TZF",
        "amount": 50.0
      },
      {
        "id": "sql-payment-schedule-313",
        "date": "2023-08-17",
        "method": "Cash App",
        "reference": "MK26979",
        "amount": 100.0
      },
      {
        "id": "sql-payment-schedule-314",
        "date": "2023-09-13",
        "method": "Cash App",
        "reference": "0SATJJY",
        "amount": 50.0
      },
      {
        "id": "sql-payment-schedule-315",
        "date": "2024-02-29",
        "method": "PayPal",
        "reference": "7RT21082D9081194W",
        "amount": 621.0
      },
      {
        "id": "sql-payment-schedule-316",
        "date": "2025-01-14",
        "method": "Cash App",
        "reference": "YRK328PYA",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-412",
        "date": "2025-01-14",
        "method": "Venmo",
        "reference": "4245726943541451417",
        "amount": 450.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-538",
        "date": "2024-02-29",
        "description": "7RT21082D9081194W",
        "amount": 18.57,
        "category": "Processing",
        "reference": "7RT21082D9081194W"
      }
    ]
  },
  {
    "orderNumber": "742",
    "payments": [
      {
        "id": "sql-payment-order-742",
        "date": "2023-07-10",
        "method": "Check",
        "reference": "",
        "amount": 556.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "743",
    "payments": [
      {
        "id": "sql-payment-order-743",
        "date": "2023-04-23",
        "method": "Venmo",
        "reference": "3787541732507271064",
        "amount": 609.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "745",
    "payments": [
      {
        "id": "sql-payment-schedule-302",
        "date": "2023-08-01",
        "method": "PayPal",
        "reference": "7XD022983S215941K",
        "amount": 814.08
      },
      {
        "id": "sql-payment-schedule-303",
        "date": "2023-11-13",
        "method": "Check",
        "reference": "",
        "amount": 4337.51
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-507",
        "date": "2023-08-01",
        "description": "7XD022983S215941K",
        "amount": 24.83,
        "category": "Processing",
        "reference": "7XD022983S215941K"
      }
    ]
  },
  {
    "orderNumber": "747",
    "payments": [
      {
        "id": "sql-payment-order-747",
        "date": "2023-03-07",
        "method": "PayPal",
        "reference": "9KD6726573203370P",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-489",
        "date": "2023-03-07",
        "description": "9KD6726573203370P",
        "amount": 1.61,
        "category": "Processing",
        "reference": "9KD6726573203370P"
      }
    ]
  },
  {
    "orderNumber": "749",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-490",
        "date": "2023-04-01",
        "description": "Order #749 expense",
        "amount": 28.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "750",
    "payments": [
      {
        "id": "sql-payment-schedule-304",
        "date": "2023-04-01",
        "method": "PayPal",
        "reference": "075592140W802791D",
        "amount": 795.0
      },
      {
        "id": "sql-payment-schedule-305",
        "date": "2024-04-26",
        "method": "PayPal",
        "reference": "36V95304EP123282L",
        "amount": 3180.0
      },
      {
        "id": "sql-payment-schedule-354",
        "date": "2024-05-18",
        "method": "Check",
        "reference": "",
        "amount": 2200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-491",
        "date": "2023-04-03",
        "description": "075592140W802791D",
        "amount": 28.24,
        "category": "Processing",
        "reference": "075592140W802791D"
      }
    ]
  },
  {
    "orderNumber": "751",
    "payments": [
      {
        "id": "sql-payment-order-751",
        "date": "2023-04-07",
        "method": "PayPal",
        "reference": "9M798248NN316582V",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-492",
        "date": "2023-04-07",
        "description": "9M798248NN316582V",
        "amount": 14.95,
        "category": "Processing",
        "reference": "9M798248NN316582V"
      }
    ]
  },
  {
    "orderNumber": "753",
    "payments": [
      {
        "id": "sql-payment-schedule-308",
        "date": "2023-05-09",
        "method": "Check",
        "reference": "",
        "amount": 875.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "755",
    "payments": [
      {
        "id": "sql-payment-order-755",
        "date": "2023-05-22",
        "method": "PayPal",
        "reference": "5TC68224V6008442V",
        "amount": 75.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-494",
        "date": "2023-05-22",
        "description": "5TC68224V6008442V",
        "amount": 2.24,
        "category": "Processing",
        "reference": "5TC68224V6008442V"
      }
    ]
  },
  {
    "orderNumber": "761",
    "payments": [
      {
        "id": "sql-payment-order-761",
        "date": "2023-09-28",
        "method": "Venmo",
        "reference": "3901903749221578315",
        "amount": 230.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-509",
        "date": "2023-09-28",
        "description": "Breanna",
        "amount": 230.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "762",
    "payments": [
      {
        "id": "sql-payment-order-762",
        "date": "2023-10-02",
        "method": "PayPal",
        "reference": "6S72710038243761R",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-510",
        "date": "2023-10-02",
        "description": "Order #762 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "763",
    "payments": [
      {
        "id": "sql-payment-order-763",
        "date": "2023-10-05",
        "method": "PayPal",
        "reference": "32B350416N9576008",
        "amount": 265.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "764",
    "payments": [
      {
        "id": "sql-payment-order-764",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "765",
    "payments": [
      {
        "id": "sql-payment-order-765",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "766",
    "payments": [
      {
        "id": "sql-payment-order-766",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "767",
    "payments": [
      {
        "id": "sql-payment-order-767",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "768",
    "payments": [
      {
        "id": "sql-payment-order-768",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "769",
    "payments": [
      {
        "id": "sql-payment-order-769",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "770",
    "payments": [
      {
        "id": "sql-payment-order-770",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "771",
    "payments": [
      {
        "id": "sql-payment-order-771",
        "date": "2023-10-10",
        "method": "PayPal",
        "reference": "5NF96165WT359753T",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-511",
        "date": "2023-10-10",
        "description": "Order #771 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "772",
    "payments": [
      {
        "id": "sql-payment-order-772",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "774",
    "payments": [
      {
        "id": "sql-payment-order-774",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "775",
    "payments": [
      {
        "id": "sql-payment-order-775",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "776",
    "payments": [
      {
        "id": "sql-payment-order-776",
        "date": "2023-10-10",
        "method": "PayPal",
        "reference": "6TL21471C65803422",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "777",
    "payments": [
      {
        "id": "sql-payment-order-777",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "778",
    "payments": [
      {
        "id": "sql-payment-order-778",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "779",
    "payments": [
      {
        "id": "sql-payment-order-779",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "780",
    "payments": [
      {
        "id": "sql-payment-order-780",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "781",
    "payments": [
      {
        "id": "sql-payment-order-781",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "782",
    "payments": [
      {
        "id": "sql-payment-order-782",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "783",
    "payments": [
      {
        "id": "sql-payment-order-783",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "784",
    "payments": [
      {
        "id": "sql-payment-order-784",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 40.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "785",
    "payments": [
      {
        "id": "sql-payment-order-785",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "786",
    "payments": [
      {
        "id": "sql-payment-order-786",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "787",
    "payments": [
      {
        "id": "sql-payment-order-787",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "788",
    "payments": [
      {
        "id": "sql-payment-order-788",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "789",
    "payments": [
      {
        "id": "sql-payment-order-789",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "790",
    "payments": [
      {
        "id": "sql-payment-order-790",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "791",
    "payments": [
      {
        "id": "sql-payment-order-791",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "792",
    "payments": [
      {
        "id": "sql-payment-order-792",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "793",
    "payments": [
      {
        "id": "sql-payment-order-793",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "794",
    "payments": [
      {
        "id": "sql-payment-order-794",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "795",
    "payments": [
      {
        "id": "sql-payment-order-795",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "796",
    "payments": [
      {
        "id": "sql-payment-order-796",
        "date": "2023-12-08",
        "method": "Venmo",
        "reference": "3953685249557516755",
        "amount": 60.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "797",
    "payments": [
      {
        "id": "sql-payment-order-797",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "798",
    "payments": [
      {
        "id": "sql-payment-order-798",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "799",
    "payments": [
      {
        "id": "sql-payment-order-799",
        "date": "2023-10-22",
        "method": "PayPal",
        "reference": "5WN32427Y0383654C",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-522",
        "date": "2023-10-22",
        "description": "Order #799 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "800",
    "payments": [
      {
        "id": "sql-payment-order-800",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "801",
    "payments": [
      {
        "id": "sql-payment-order-801",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "802",
    "payments": [
      {
        "id": "sql-payment-order-802",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "803",
    "payments": [
      {
        "id": "sql-payment-order-803",
        "date": "2023-10-23",
        "method": "PayPal",
        "reference": "69816032R21726258",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-523",
        "date": "2023-10-23",
        "description": "Order #803 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "804",
    "payments": [
      {
        "id": "sql-payment-order-804",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "805",
    "payments": [
      {
        "id": "sql-payment-order-805",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "806",
    "payments": [
      {
        "id": "sql-payment-order-806",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "807",
    "payments": [
      {
        "id": "sql-payment-order-807",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "808",
    "payments": [
      {
        "id": "sql-payment-order-808",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "809",
    "payments": [
      {
        "id": "sql-payment-order-809",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "810",
    "payments": [
      {
        "id": "sql-payment-order-810",
        "date": "2023-10-23",
        "method": "PayPal",
        "reference": "800521135R758681U",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "811",
    "payments": [
      {
        "id": "sql-payment-order-811",
        "date": "2023-10-23",
        "method": "card",
        "reference": "8AL71281WA528180N",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "812",
    "payments": [
      {
        "id": "sql-payment-order-812",
        "date": "2023-10-23",
        "method": "PayPal",
        "reference": "956003832G5381918",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "813",
    "payments": [
      {
        "id": "sql-payment-order-813",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "814",
    "payments": [
      {
        "id": "sql-payment-order-814",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "815",
    "payments": [
      {
        "id": "sql-payment-order-815",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "816",
    "payments": [
      {
        "id": "sql-payment-order-816",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "817",
    "payments": [
      {
        "id": "sql-payment-order-817",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "818",
    "payments": [
      {
        "id": "sql-payment-order-818",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "819",
    "payments": [
      {
        "id": "sql-payment-order-819",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "820",
    "payments": [
      {
        "id": "sql-payment-order-820",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "823",
    "payments": [
      {
        "id": "sql-payment-order-823",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "824",
    "payments": [
      {
        "id": "sql-payment-order-824",
        "date": "2023-10-24",
        "method": "card",
        "reference": "70X31508X04584209",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-524",
        "date": "2023-10-24",
        "description": "Order #824 expense",
        "amount": 1.09,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "825",
    "payments": [
      {
        "id": "sql-payment-order-825",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "826",
    "payments": [
      {
        "id": "sql-payment-order-826",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "827",
    "payments": [
      {
        "id": "sql-payment-order-827",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "828",
    "payments": [
      {
        "id": "sql-payment-order-828",
        "date": "2023-10-24",
        "method": "card",
        "reference": "15050317JW6540303",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-525",
        "date": "2023-10-24",
        "description": "Order #828 expense",
        "amount": 1.09,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "829",
    "payments": [
      {
        "id": "sql-payment-order-829",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "830",
    "payments": [
      {
        "id": "sql-payment-order-830",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "833",
    "payments": [
      {
        "id": "sql-payment-order-833",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "834",
    "payments": [
      {
        "id": "sql-payment-order-834",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "835",
    "payments": [
      {
        "id": "sql-payment-order-835",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "837",
    "payments": [
      {
        "id": "sql-payment-order-837",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "838",
    "payments": [
      {
        "id": "sql-payment-order-838",
        "date": "2023-10-25",
        "method": "venmo",
        "reference": "8GR32738DX3980748",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-526",
        "date": "2023-10-25",
        "description": "Order #838 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "839",
    "payments": [
      {
        "id": "sql-payment-order-839",
        "date": "2023-10-25",
        "method": "PayPal",
        "reference": "7AH2581103370581D",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-527",
        "date": "2023-10-25",
        "description": "Order #839 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "840",
    "payments": [
      {
        "id": "sql-payment-order-840",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "841",
    "payments": [
      {
        "id": "sql-payment-order-841",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "842",
    "payments": [
      {
        "id": "sql-payment-order-842",
        "date": "2023-10-29",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "843",
    "payments": [
      {
        "id": "sql-payment-order-843",
        "date": "2023-11-16",
        "method": "Cash",
        "reference": "Offline",
        "amount": 79.31
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "844",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-528",
        "date": "2023-11-06",
        "description": "Order #844 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "845",
    "payments": [
      {
        "id": "sql-payment-schedule-328",
        "date": "2023-11-06",
        "method": "PayPal",
        "reference": "0LH2461129326083K",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-329",
        "date": "2024-04-22",
        "method": "PayPal",
        "reference": "4AR08959ET2331037",
        "amount": 2000.0
      },
      {
        "id": "sql-payment-schedule-346",
        "date": "2024-10-02",
        "method": "PayPal",
        "reference": "24H7334455676080R",
        "amount": 491.0
      },
      {
        "id": "sql-payment-schedule-396",
        "date": "2024-10-04",
        "method": "PayPal",
        "reference": "6B173466UM672970P",
        "amount": 353.33
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-529",
        "date": "2023-11-06",
        "description": "0LH2461129326083K",
        "amount": 16.34,
        "category": "Processing",
        "reference": "0LH2461129326083K"
      },
      {
        "id": "sql-expense-545",
        "date": "2024-04-22",
        "description": "4AR08959ET2331037",
        "amount": 59.8,
        "category": "Processing",
        "reference": "4AR08959ET2331037"
      },
      {
        "id": "sql-expense-599",
        "date": "2024-10-02",
        "description": "24H7334455676080R",
        "amount": 14.68,
        "category": "Processing",
        "reference": "24H7334455676080R"
      },
      {
        "id": "sql-expense-598",
        "date": "2024-10-04",
        "description": "6B173466UM672970P",
        "amount": 10.56,
        "category": "Processing",
        "reference": "6B173466UM672970P"
      }
    ]
  },
  {
    "orderNumber": "846",
    "payments": [
      {
        "id": "sql-payment-order-846",
        "date": "2023-11-23",
        "method": "Check",
        "reference": "",
        "amount": 125.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "847",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-530",
        "date": "2023-11-12",
        "description": "Order #847 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "848",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-531",
        "date": "2023-11-18",
        "description": "Order #848 expense",
        "amount": 16.3,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "849",
    "payments": [
      {
        "id": "sql-payment-schedule-331",
        "date": "2023-11-18",
        "method": "PayPal",
        "reference": "7EA74245JK2987015",
        "amount": 528.75
      },
      {
        "id": "sql-payment-schedule-332",
        "date": "2024-06-23",
        "method": "PayPal",
        "reference": "36D859845M5330008",
        "amount": 981.75
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-532",
        "date": "2023-11-19",
        "description": "7EA74245JK2987015",
        "amount": 16.3,
        "category": "Processing",
        "reference": "7EA74245JK2987015"
      },
      {
        "id": "sql-expense-557",
        "date": "2024-06-23",
        "description": "36D859845M5330008",
        "amount": 29.35,
        "category": "Processing",
        "reference": "36D859845M5330008"
      }
    ]
  },
  {
    "orderNumber": "851",
    "payments": [
      {
        "id": "sql-payment-schedule-335",
        "date": "2023-12-05",
        "method": "Check",
        "reference": "",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-336",
        "date": "2024-09-05",
        "method": "Check",
        "reference": "1013",
        "amount": 2120.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "852",
    "payments": [
      {
        "id": "sql-payment-schedule-333",
        "date": "2023-11-12",
        "method": "PayPal",
        "reference": "8G0826355C776251C",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-334",
        "date": "2024-06-11",
        "method": "venmo",
        "reference": "81005336G85741244",
        "amount": 424.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-533",
        "date": "2023-11-12",
        "description": "8G0826355C776251C",
        "amount": 16.34,
        "category": "Processing",
        "reference": "8G0826355C776251C"
      }
    ]
  },
  {
    "orderNumber": "853",
    "payments": [
      {
        "id": "sql-payment-order-853",
        "date": "2024-01-07",
        "method": "Check",
        "reference": "",
        "amount": 300.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "854",
    "payments": [
      {
        "id": "sql-payment-order-854",
        "date": "2023-12-05",
        "method": "card",
        "reference": "0242200228872191G",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-534",
        "date": "2023-12-05",
        "description": "Order #854 expense",
        "amount": 5.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "855",
    "payments": [
      {
        "id": "sql-payment-order-855",
        "date": "2023-12-21",
        "method": "Cash",
        "reference": "Offline",
        "amount": 70.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "856",
    "payments": [
      {
        "id": "sql-payment-order-856",
        "date": "2024-01-31",
        "method": "Check",
        "reference": "00336704",
        "amount": 318.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "857",
    "payments": [
      {
        "id": "sql-payment-order-857",
        "date": "2023-12-21",
        "method": "PayPal",
        "reference": "3GG93740ES3381358",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "859",
    "payments": [
      {
        "id": "sql-payment-order-859",
        "date": "2024-01-26",
        "method": "card",
        "reference": "4K851881DP836111E",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-535",
        "date": "2024-01-26",
        "description": "Order #859 expense",
        "amount": 5.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "861",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-536",
        "date": "2024-02-08",
        "description": "Order #861 expense",
        "amount": 18.99,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "862",
    "payments": [
      {
        "id": "sql-payment-schedule-338",
        "date": "2024-02-08",
        "method": "PayPal",
        "reference": "6W598318YJ575740N",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-339",
        "date": "2024-08-24",
        "method": "Venmo",
        "reference": "4141935455616389720",
        "amount": 1222.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-537",
        "date": "2024-02-09",
        "description": "6W598318YJ575740N",
        "amount": 18.99,
        "category": "Processing",
        "reference": "6W598318YJ575740N"
      }
    ]
  },
  {
    "orderNumber": "863",
    "payments": [
      {
        "id": "sql-payment-schedule-340",
        "date": "2024-02-12",
        "method": "Check",
        "reference": "",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-341",
        "date": "2024-04-29",
        "method": "Check",
        "reference": "1073",
        "amount": 2750.0
      },
      {
        "id": "sql-payment-schedule-351",
        "date": "2024-09-22",
        "method": "Check",
        "reference": "6007",
        "amount": 675.13
      },
      {
        "id": "sql-payment-schedule-388",
        "date": "2024-10-04",
        "method": "Check",
        "reference": "",
        "amount": 397.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "868",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-539",
        "date": "2024-03-16",
        "description": "Order #868 expense",
        "amount": 1.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "871",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-540",
        "date": "2024-03-16",
        "description": "Order #871 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "879",
    "payments": [
      {
        "id": "sql-payment-schedule-342",
        "date": "2024-04-02",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-343",
        "date": "2024-12-26",
        "method": "Venmo",
        "reference": "4231645845009946105",
        "amount": 1600.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "880",
    "payments": [
      {
        "id": "sql-payment-order-880",
        "date": "2024-03-27",
        "method": "card",
        "reference": "97G13577BU622104J",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-541",
        "date": "2024-03-27",
        "description": "Order #880 expense",
        "amount": 2.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "883",
    "payments": [
      {
        "id": "sql-payment-schedule-344",
        "date": "2024-03-30",
        "method": "PayPal",
        "reference": "7CL85176J49114231",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-345",
        "date": "2025-01-15",
        "method": "Venmo",
        "reference": "4246119527048863880",
        "amount": 1484.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-542",
        "date": "2024-03-30",
        "description": "7CL85176J49114231",
        "amount": 16.34,
        "category": "Processing",
        "reference": "7CL85176J49114231"
      },
      {
        "id": "sql-expense-755",
        "date": "2025-02-15",
        "description": "Miles - 89\r\nThe Harper Event Venue, 13635 Dickson Rd, Meadville, PA 16335",
        "amount": 133.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "884",
    "payments": [
      {
        "id": "sql-payment-order-884",
        "date": "2024-04-05",
        "method": "card",
        "reference": "8M741324L93415032",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-544",
        "date": "2024-04-05",
        "description": "Order #884 expense",
        "amount": 5.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "885",
    "payments": [
      {
        "id": "sql-payment-order-885",
        "date": "2024-04-10",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "886",
    "payments": [
      {
        "id": "sql-payment-order-886",
        "date": "2024-05-13",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "887",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-546",
        "date": "2024-04-25",
        "description": "Order #887 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "888",
    "payments": [
      {
        "id": "sql-payment-schedule-347",
        "date": "2024-04-25",
        "method": "PayPal",
        "reference": "48G736280P486052G",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-348",
        "date": "2025-09-06",
        "method": "Zelle",
        "reference": "PNCAA0UQS46d",
        "amount": 3500.0
      },
      {
        "id": "sql-payment-schedule-484",
        "date": "2025-09-06",
        "method": "Venmo",
        "reference": "4415846366099686872",
        "amount": 422.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-547",
        "date": "2024-04-26",
        "description": "48G736280P486052G",
        "amount": 16.34,
        "category": "Processing",
        "reference": "48G736280P486052G"
      },
      {
        "id": "sql-expense-929",
        "date": "2025-09-06",
        "description": "Miles - 6.6\r\nBuhl Mansion",
        "amount": 9.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-930",
        "date": "2025-09-06",
        "description": "Breanna Gassner - 2 hours - Second Shooter\r\nCash",
        "amount": 200.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-931",
        "date": "2025-09-06",
        "description": "Ian Chiodo - 6 hours\r\n2 - 6\r\nAssociate Shooting\r\nVenmo",
        "amount": 400.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-932",
        "date": "2025-09-06",
        "description": "Lunch - Burger King",
        "amount": 12.49,
        "category": "food",
        "reference": ""
      },
      {
        "id": "sql-expense-935",
        "date": "2025-09-06",
        "description": "Order #888 expense",
        "amount": 198.27,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "890",
    "payments": [
      {
        "id": "sql-payment-schedule-349",
        "date": "2024-04-29",
        "method": "Venmo",
        "reference": "4057021446412839535",
        "amount": 528.75
      },
      {
        "id": "sql-payment-schedule-350",
        "date": "2025-05-11",
        "method": "Venmo",
        "reference": "4330327144859941666",
        "amount": 1797.75
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-922",
        "date": "2025-05-11",
        "description": "Order #890 expense",
        "amount": 95.53,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-923",
        "date": "2025-09-20",
        "description": "Venmo - Emily Carson Second Shooter",
        "amount": 125.0,
        "category": "second shooter",
        "reference": "4426167743122542830"
      },
      {
        "id": "sql-expense-1006",
        "date": "2025-09-20",
        "description": "Miles - 7.4\r\nAnn Baker Hair Company\r\nThe Corinthian",
        "amount": 11.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "891",
    "payments": [
      {
        "id": "sql-payment-order-891",
        "date": "2024-05-24",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "893",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-548",
        "date": "2024-05-13",
        "description": "Order #893 expense",
        "amount": 18.99,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "894",
    "payments": [
      {
        "id": "sql-payment-schedule-352",
        "date": "2024-05-13",
        "method": "PayPal",
        "reference": "10R024382C228660U",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-353",
        "date": "2025-03-07",
        "method": "PayPal",
        "reference": "6BR27546KN6777004",
        "amount": 1060.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-549",
        "date": "2024-05-13",
        "description": "10R024382C228660U",
        "amount": 18.99,
        "category": "Processing",
        "reference": "10R024382C228660U"
      },
      {
        "id": "sql-expense-690",
        "date": "2025-03-07",
        "description": "6BR27546KN6777004",
        "amount": 37.48,
        "category": "Processing",
        "reference": "6BR27546KN6777004"
      },
      {
        "id": "sql-expense-763",
        "date": "2025-04-26",
        "description": "Miles - 38.6\r\nMill Creek Park",
        "amount": 57.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-812",
        "date": "2025-04-26",
        "description": "Order #894 expense",
        "amount": 13.0,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "895",
    "payments": [
      {
        "id": "sql-payment-order-895",
        "date": "2024-05-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "896",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-550",
        "date": "2024-05-14",
        "description": "Order #896 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "898",
    "payments": [
      {
        "id": "sql-payment-schedule-357",
        "date": "2024-06-21",
        "method": "Check",
        "reference": "641",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-358",
        "date": "2025-04-23",
        "method": "PayPal",
        "reference": "06U56496JC700220U",
        "amount": 3498.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-705",
        "date": "2025-04-23",
        "description": "06U56496JC700220U",
        "amount": 80.19,
        "category": "Processing",
        "reference": "06U56496JC700220U"
      },
      {
        "id": "sql-expense-706",
        "date": "2025-04-23",
        "description": "Breanna Gassner - Photographer $100/hr - 6 Hours",
        "amount": 600.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-707",
        "date": "2025-04-23",
        "description": "Brittani Gassner - Second Shooter - 4 Hours - $150",
        "amount": 150.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-751",
        "date": "2025-05-02",
        "description": "Miles - 38.6\r\nMill Creek Park",
        "amount": 57.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "900",
    "payments": [
      {
        "id": "sql-payment-order-900",
        "date": "2024-06-11",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "902",
    "payments": [
      {
        "id": "sql-payment-schedule-355",
        "date": "2024-06-12",
        "method": "Check",
        "reference": "8883",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-356",
        "date": "2025-08-31",
        "method": "Zelle",
        "reference": "20C0JH7TL922",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-483",
        "date": "2025-10-12",
        "method": "Venmo",
        "reference": "4442153587490445454",
        "amount": 2136.25
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-926",
        "date": "2025-08-31",
        "description": "Order #902 expense",
        "amount": 90.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-999",
        "date": "2025-10-12",
        "description": "Breanna Gassner Main Shooter 5.5 Hours $100/hr - Venmo",
        "amount": 550.0,
        "category": "second shooter",
        "reference": "4442160977501486670"
      },
      {
        "id": "sql-expense-1000",
        "date": "2025-10-12",
        "description": "Emily Carson Second Shooter 5 Hours $60/hr - Venmo",
        "amount": 300.0,
        "category": "second shooter",
        "reference": "4442164063334929163"
      },
      {
        "id": "sql-expense-1002",
        "date": "2025-10-12",
        "description": "Order #902 expense",
        "amount": 70.36,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1001",
        "date": "2025-10-25",
        "description": "Miles -  151.40 \r\nGreystone Fields\r\n4085 Sandy Hill Road Gibsonia, PA 15044",
        "amount": 227.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "904",
    "payments": [
      {
        "id": "sql-payment-order-904",
        "date": "2024-05-26",
        "method": "card",
        "reference": "5S6899177D775492W",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-551",
        "date": "2024-05-26",
        "description": "Order #904 expense",
        "amount": 2.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "906",
    "payments": [
      {
        "id": "sql-payment-order-906",
        "date": "2024-05-28",
        "method": "card",
        "reference": "1DU00754721916023",
        "amount": 318.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-552",
        "date": "2024-05-28",
        "description": "Order #906 expense",
        "amount": 10.0,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "907",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-553",
        "date": "2024-06-03",
        "description": "Order #907 expense",
        "amount": 18.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "908",
    "payments": [
      {
        "id": "sql-payment-schedule-359",
        "date": "2024-06-03",
        "method": "PayPal",
        "reference": "5AG96078GX304804S",
        "amount": 528.75
      },
      {
        "id": "sql-payment-schedule-360",
        "date": "2024-08-23",
        "method": "card",
        "reference": "41D12952G4024184B",
        "amount": 1570.05
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-554",
        "date": "2024-06-03",
        "description": "5AG96078GX304804S",
        "amount": 18.94,
        "category": "Processing",
        "reference": "5AG96078GX304804S"
      },
      {
        "id": "sql-expense-583",
        "date": "2024-08-23",
        "description": "41D12952G4024184B",
        "amount": 47.43,
        "category": "Processing",
        "reference": "41D12952G4024184B"
      }
    ]
  },
  {
    "orderNumber": "909",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-555",
        "date": "2024-06-11",
        "description": "Order #909 expense",
        "amount": 18.99,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "910",
    "payments": [
      {
        "id": "sql-payment-schedule-361",
        "date": "2024-06-11",
        "method": "PayPal",
        "reference": "3RG65568YN0758828",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-362",
        "date": "2024-07-07",
        "method": "Venmo",
        "reference": "4106965403451901463",
        "amount": 2769.25
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-556",
        "date": "2024-06-11",
        "description": "3RG65568YN0758828",
        "amount": 18.99,
        "category": "Processing",
        "reference": "3RG65568YN0758828"
      }
    ]
  },
  {
    "orderNumber": "911",
    "payments": [
      {
        "id": "sql-payment-order-911",
        "date": "2024-07-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 200.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "912",
    "payments": [
      {
        "id": "sql-payment-order-912",
        "date": "2024-07-02",
        "method": "Cash",
        "reference": "Offline",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "913",
    "payments": [
      {
        "id": "sql-payment-order-913",
        "date": "2024-07-11",
        "method": "Cash",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "914",
    "payments": [
      {
        "id": "sql-payment-order-914",
        "date": "2024-07-01",
        "method": "PayPal",
        "reference": "77L95450P4510043L",
        "amount": 79.31
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-558",
        "date": "2024-07-01",
        "description": "Order #914 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "915",
    "payments": [
      {
        "id": "sql-payment-schedule-363",
        "date": "2024-06-16",
        "method": "Check",
        "reference": "",
        "amount": 175.0
      },
      {
        "id": "sql-payment-schedule-364",
        "date": "2024-07-01",
        "method": "Check",
        "reference": "",
        "amount": 90.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "917",
    "payments": [
      {
        "id": "sql-payment-order-917",
        "date": "2024-07-11",
        "method": "Check",
        "reference": "Offline",
        "amount": 79.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "919",
    "payments": [
      {
        "id": "sql-payment-schedule-374",
        "date": "2024-08-11",
        "method": "Zelle",
        "reference": "PNCAA0MaL59X",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-375",
        "date": "2025-05-17",
        "method": "Zelle",
        "reference": "PNCAA0Rwo90S",
        "amount": 1514.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-720",
        "date": "2025-05-17",
        "description": "Breanna Gassner 1hr shooting",
        "amount": 100.0,
        "category": "second shooter",
        "reference": "4334571539804646975"
      },
      {
        "id": "sql-expense-749",
        "date": "2025-05-17",
        "description": "Miles - 17\r\nTara",
        "amount": 25.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "920",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-559",
        "date": "2024-07-14",
        "description": "Order #920 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "921",
    "payments": [
      {
        "id": "sql-payment-schedule-365",
        "date": "2024-07-14",
        "method": "PayPal",
        "reference": "3KA23943FN524053B",
        "amount": 531.0
      },
      {
        "id": "sql-payment-schedule-366",
        "date": "2025-09-09",
        "method": "Venmo",
        "reference": "4417879850243488995",
        "amount": 2220.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-560",
        "date": "2024-07-14",
        "description": "3KA23943FN524053B",
        "amount": 16.34,
        "category": "Processing",
        "reference": "3KA23943FN524053B"
      },
      {
        "id": "sql-expense-934",
        "date": "2025-09-09",
        "description": "Order #921 expense",
        "amount": 111.08,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-933",
        "date": "2025-09-13",
        "description": "Miles -   163.20 \r\nCeremony - Phipps Conservatory 1 Schenley Drive Pittsburgh PA 15213\r\nPhotos - Mellon Institute\r\nReception - The Terrace at the Hyatt Southside Works 2795 S Water St Pittsburgh PA 15203",
        "amount": 244.8,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-982",
        "date": "2025-11-03",
        "description": "Video Editor",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "923",
    "payments": [
      {
        "id": "sql-payment-schedule-367",
        "date": "2024-07-17",
        "method": "PayPal",
        "reference": "4R214549V6540602B",
        "amount": 424.0
      },
      {
        "id": "sql-payment-schedule-368",
        "date": "2024-08-11",
        "method": "venmo",
        "reference": "53A08069UK143645B",
        "amount": 1060.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-561",
        "date": "2024-07-17",
        "description": "4R214549V6540602B",
        "amount": 15.29,
        "category": "Processing",
        "reference": "4R214549V6540602B"
      }
    ]
  },
  {
    "orderNumber": "925",
    "payments": [
      {
        "id": "sql-payment-order-925",
        "date": "2024-09-16",
        "method": "Venmo",
        "reference": "4158698013873796303",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "928",
    "payments": [
      {
        "id": "sql-payment-schedule-369",
        "date": "2024-10-14",
        "method": "Zelle",
        "reference": "PNCAA0NkL22w",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-370",
        "date": "2025-07-30",
        "method": "Zelle",
        "reference": "PNCAA0TYC01v",
        "amount": 1217.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-884",
        "date": "2025-07-30",
        "description": "Order #928 expense",
        "amount": 66.78,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-883",
        "date": "2025-08-02",
        "description": "Miles - 139",
        "amount": 208.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "929",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-562",
        "date": "2024-07-29",
        "description": "Order #929 expense",
        "amount": 18.77,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "930",
    "payments": [
      {
        "id": "sql-payment-schedule-371",
        "date": "2024-07-29",
        "method": "Venmo",
        "reference": "3JP08305A3558281A",
        "amount": 523.75
      },
      {
        "id": "sql-payment-schedule-372",
        "date": "2024-08-10",
        "method": "Venmo",
        "reference": "4131769060307785917",
        "amount": 180.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-563",
        "date": "2024-07-29",
        "description": "3JP08305A3558281A",
        "amount": 18.77,
        "category": "Processing",
        "reference": "3JP08305A3558281A"
      }
    ]
  },
  {
    "orderNumber": "931",
    "payments": [
      {
        "id": "sql-payment-order-931",
        "date": "2024-07-30",
        "method": "PayPal",
        "reference": "31R71435YN8773350",
        "amount": 318.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-564",
        "date": "2024-07-30",
        "description": "Order #931 expense",
        "amount": 11.59,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "932",
    "payments": [
      {
        "id": "sql-payment-order-932",
        "date": "2024-08-04",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "934",
    "payments": [
      {
        "id": "sql-payment-order-934",
        "date": "2024-08-05",
        "method": "card",
        "reference": "87900195YK681011V",
        "amount": 265.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-565",
        "date": "2024-08-05",
        "description": "Order #934 expense",
        "amount": 8.41,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "936",
    "payments": [
      {
        "id": "sql-payment-order-936",
        "date": "2024-08-12",
        "method": "Venmo",
        "reference": "4133417826295576036",
        "amount": 145.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "937",
    "payments": [
      {
        "id": "sql-payment-order-937",
        "date": "2024-08-06",
        "method": "Venmo",
        "reference": "4129108236212523760",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "940",
    "payments": [
      {
        "id": "sql-payment-order-940",
        "date": "2024-08-14",
        "method": "PayPal",
        "reference": "59980124F3996994E",
        "amount": 159.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-566",
        "date": "2024-08-14",
        "description": "Order #940 expense",
        "amount": 6.04,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "941",
    "payments": [
      {
        "id": "sql-payment-order-941",
        "date": "2024-08-14",
        "method": "card",
        "reference": "2LE58486V8377740R",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-567",
        "date": "2024-08-14",
        "description": "Order #941 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "942",
    "payments": [
      {
        "id": "sql-payment-order-942",
        "date": "2024-08-14",
        "method": "card",
        "reference": "03L65270GW509905U",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-568",
        "date": "2024-08-14",
        "description": "Order #942 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "943",
    "payments": [
      {
        "id": "sql-payment-order-943",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "944",
    "payments": [
      {
        "id": "sql-payment-order-944",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.15
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "945",
    "payments": [
      {
        "id": "sql-payment-order-945",
        "date": "2024-08-14",
        "method": "Venmo",
        "reference": "4134646014874914228",
        "amount": 63.6
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "946",
    "payments": [
      {
        "id": "sql-payment-order-946",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "947",
    "payments": [
      {
        "id": "sql-payment-order-947",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "950",
    "payments": [
      {
        "id": "sql-payment-order-950",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "951",
    "payments": [
      {
        "id": "sql-payment-order-951",
        "date": "2024-08-15",
        "method": "card",
        "reference": "5S611644D5025850V",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-569",
        "date": "2024-08-15",
        "description": "Order #951 expense",
        "amount": 2.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "952",
    "payments": [
      {
        "id": "sql-payment-order-952",
        "date": "2024-08-15",
        "method": "venmo",
        "reference": "6RY38686F4982262P",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-570",
        "date": "2024-08-15",
        "description": "Order #952 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "954",
    "payments": [
      {
        "id": "sql-payment-schedule-376",
        "date": "2024-09-04",
        "method": "Venmo",
        "reference": "4150127305510694041",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-377",
        "date": "2025-03-25",
        "method": "Venmo",
        "reference": "",
        "amount": 692.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-742",
        "date": "2025-06-07",
        "description": "Miles - 116.20\r\n139 McClellan St, Cambridge Springs, PA 16403",
        "amount": 174.3,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-807",
        "date": "2025-06-07",
        "description": "Order #954 expense",
        "amount": 27.39,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "957",
    "payments": [
      {
        "id": "sql-payment-order-957",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "958",
    "payments": [
      {
        "id": "sql-payment-order-958",
        "date": "2024-08-16",
        "method": "card",
        "reference": "7LX21099PE890091N",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-571",
        "date": "2024-08-16",
        "description": "Order #958 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "959",
    "payments": [
      {
        "id": "sql-payment-order-959",
        "date": "2024-08-16",
        "method": "card",
        "reference": "4N972466K5243611H",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-572",
        "date": "2024-08-16",
        "description": "Order #959 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "960",
    "payments": [
      {
        "id": "sql-payment-order-960",
        "date": "2024-08-16",
        "method": "PayPal",
        "reference": "6BL19030UK298593R",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-573",
        "date": "2024-08-16",
        "description": "Order #960 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "961",
    "payments": [
      {
        "id": "sql-payment-order-961",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.15
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "962",
    "payments": [
      {
        "id": "sql-payment-order-962",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.15
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "963",
    "payments": [
      {
        "id": "sql-payment-order-963",
        "date": "2024-08-16",
        "method": "PayPal",
        "reference": "39X04414JH4590328",
        "amount": 21.15
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-574",
        "date": "2024-08-16",
        "description": "Order #963 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "964",
    "payments": [
      {
        "id": "sql-payment-order-964",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "965",
    "payments": [
      {
        "id": "sql-payment-order-965",
        "date": "2024-08-17",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.4
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "968",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-575",
        "date": "2024-08-19",
        "description": "Order #968 expense",
        "amount": 20.03,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "969",
    "payments": [
      {
        "id": "sql-payment-schedule-378",
        "date": "2024-08-19",
        "method": "PayPal",
        "reference": "0B627745C5105874A",
        "amount": 560.0
      },
      {
        "id": "sql-payment-schedule-392",
        "date": "2024-09-27",
        "method": "Cash",
        "reference": "Tip",
        "amount": 50.0
      },
      {
        "id": "sql-payment-schedule-379",
        "date": "2024-09-28",
        "method": "PayPal",
        "reference": "6H613396B59408317",
        "amount": 606.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-576",
        "date": "2024-08-19",
        "description": "0B627745C5105874A",
        "amount": 20.03,
        "category": "Processing",
        "reference": "0B627745C5105874A"
      }
    ]
  },
  {
    "orderNumber": "970",
    "payments": [
      {
        "id": "sql-payment-order-970",
        "date": "2024-08-19",
        "method": "card",
        "reference": "3DW071719K7587509",
        "amount": 265.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-577",
        "date": "2024-08-19",
        "description": "Order #970 expense",
        "amount": 8.41,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "973",
    "payments": [
      {
        "id": "sql-payment-schedule-380",
        "date": "2024-09-04",
        "method": "Venmo",
        "reference": "4149779329835737405",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-381",
        "date": "2025-08-30",
        "method": "Cash",
        "reference": "",
        "amount": 3280.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-919",
        "date": "2025-08-30",
        "description": "Casey Swogger\r\nMain shooter\r\n4 hours\r\n2 - 6\r\n$75 / hr\r\n$300",
        "amount": 300.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-920",
        "date": "2025-08-30",
        "description": "Breanna Gassner\r\nMain Shooter\r\n4 hours\r\n6 - 10\r\n$100 / hr\r\n$400",
        "amount": 400.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-921",
        "date": "2025-08-30",
        "description": "Miles -  83.60\r\nThe Barn at Firestone Farms\r\n1501 Eisenhower Blvd Columbiana, Ohio 44408",
        "amount": 125.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "974",
    "payments": [
      {
        "id": "sql-payment-order-974",
        "date": "2024-09-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 40.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "975",
    "payments": [
      {
        "id": "sql-payment-order-975",
        "date": "2024-08-20",
        "method": "card",
        "reference": "05Y10278LV092300J",
        "amount": 42.4
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-578",
        "date": "2024-08-20",
        "description": "Order #975 expense",
        "amount": 1.76,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "976",
    "payments": [
      {
        "id": "sql-payment-order-976",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "977",
    "payments": [
      {
        "id": "sql-payment-order-977",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "978",
    "payments": [
      {
        "id": "sql-payment-order-978",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "979",
    "payments": [
      {
        "id": "sql-payment-order-979",
        "date": "2024-08-20",
        "method": "card",
        "reference": "99J71157HL746493F",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-579",
        "date": "2024-08-20",
        "description": "Order #979 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "980",
    "payments": [
      {
        "id": "sql-payment-order-980",
        "date": "2024-09-01",
        "method": "Venmo",
        "reference": "4147533326641715885",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "981",
    "payments": [
      {
        "id": "sql-payment-order-981",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "982",
    "payments": [
      {
        "id": "sql-payment-order-982",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "985",
    "payments": [
      {
        "id": "sql-payment-order-985",
        "date": "2024-08-21",
        "method": "PayPal",
        "reference": "76N01691P75898204",
        "amount": 238.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-580",
        "date": "2024-08-21",
        "description": "Order #985 expense",
        "amount": 8.81,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "986",
    "payments": [
      {
        "id": "sql-payment-order-986",
        "date": "2024-08-21",
        "method": "PayPal",
        "reference": "4HC63625EH0260310",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-581",
        "date": "2024-08-21",
        "description": "Order #986 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "988",
    "payments": [
      {
        "id": "sql-payment-order-988",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "989",
    "payments": [
      {
        "id": "sql-payment-order-989",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "992",
    "payments": [
      {
        "id": "sql-payment-order-992",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "994",
    "payments": [
      {
        "id": "sql-payment-order-994",
        "date": "2024-10-06",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "995",
    "payments": [
      {
        "id": "sql-payment-order-995",
        "date": "2024-09-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "996",
    "payments": [
      {
        "id": "sql-payment-order-996",
        "date": "2024-08-25",
        "method": "PayPal",
        "reference": "7PB11990SC354884S",
        "amount": 265.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-582",
        "date": "2024-08-25",
        "description": "7PB11990SC354884S",
        "amount": 9.74,
        "category": "Processing",
        "reference": "7PB11990SC354884S"
      }
    ]
  },
  {
    "orderNumber": "997",
    "payments": [
      {
        "id": "sql-payment-order-997",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "998",
    "payments": [
      {
        "id": "sql-payment-order-998",
        "date": "2024-09-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 30.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "999",
    "payments": [
      {
        "id": "sql-payment-order-999",
        "date": "2024-09-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 30.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1000",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-584",
        "date": "2024-08-28",
        "description": "Order #1000 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1001",
    "payments": [
      {
        "id": "sql-payment-order-1001",
        "date": "2024-08-29",
        "method": "card",
        "reference": "57820832HP389710S",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-585",
        "date": "2024-08-29",
        "description": "Order #1001 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1002",
    "payments": [
      {
        "id": "sql-payment-schedule-382",
        "date": "2024-08-28",
        "method": "PayPal",
        "reference": "4MP9982326997863D",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-383",
        "date": "2025-07-25",
        "method": "Venmo",
        "reference": "4384661390466389616",
        "amount": 2438.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-586",
        "date": "2024-08-29",
        "description": "4MP9982326997863D",
        "amount": 16.34,
        "category": "Processing",
        "reference": "4MP9982326997863D"
      },
      {
        "id": "sql-expense-873",
        "date": "2025-07-25",
        "description": "Order #1002 expense",
        "amount": 132.69,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-872",
        "date": "2025-08-23",
        "description": "Miles - 188",
        "amount": 282.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-991",
        "date": "2025-11-03",
        "description": "Video Editor",
        "amount": 205.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1003",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-587",
        "date": "2024-08-29",
        "description": "Order #1003 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1004",
    "payments": [
      {
        "id": "sql-payment-schedule-384",
        "date": "2024-08-29",
        "method": "PayPal",
        "reference": "1K63166628018264L",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-385",
        "date": "2025-10-01",
        "method": "Venmo",
        "reference": "4433889159636111818",
        "amount": 2120.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-969",
        "date": "2024-08-29",
        "description": "Order #1004 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-972",
        "date": "2025-10-01",
        "description": "Order #1004 expense",
        "amount": 113.02,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-970",
        "date": "2025-10-04",
        "description": "Ian Chiodo - Second Shooter 2 hours",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-971",
        "date": "2025-10-04",
        "description": "Miles - 181.8\r\nLongue Vue Club",
        "amount": 272.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1005",
    "payments": [
      {
        "id": "sql-payment-order-1005",
        "date": "2024-09-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1006",
    "payments": [
      {
        "id": "sql-payment-order-1006",
        "date": "2024-08-31",
        "method": "PayPal",
        "reference": "7JM21150P05276608",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-588",
        "date": "2024-08-31",
        "description": "Order #1006 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1007",
    "payments": [
      {
        "id": "sql-payment-order-1007",
        "date": "2024-09-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1009",
    "payments": [
      {
        "id": "sql-payment-order-1009",
        "date": "2024-09-01",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1010",
    "payments": [
      {
        "id": "sql-payment-order-1010",
        "date": "2024-09-02",
        "method": "card",
        "reference": "2Y664848J6417191B",
        "amount": 530.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-589",
        "date": "2024-09-02",
        "description": "Order #1010 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1011",
    "payments": [
      {
        "id": "sql-payment-order-1011",
        "date": "2024-10-20",
        "method": "Venmo",
        "reference": "4183220709714433155",
        "amount": 159.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1016",
    "payments": [
      {
        "id": "sql-payment-order-1016",
        "date": "2024-09-13",
        "method": "card",
        "reference": "0F2696782B325621X",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-590",
        "date": "2024-09-13",
        "description": "Order #1016 expense",
        "amount": 2.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1018",
    "payments": [
      {
        "id": "sql-payment-schedule-386",
        "date": "2024-09-15",
        "method": "Zelle",
        "reference": "PNCAA0NHy57s",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-387",
        "date": "2025-05-25",
        "method": "card",
        "reference": "3XG37051BJ8046646",
        "amount": 3095.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-728",
        "date": "2025-05-25",
        "description": "3XG37051BJ8046646",
        "amount": 93.04,
        "category": "Processing",
        "reference": "3XG37051BJ8046646"
      },
      {
        "id": "sql-expense-729",
        "date": "2025-05-25",
        "description": "127.6 Miles",
        "amount": 95.7,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-730",
        "date": "2025-05-25",
        "description": "Breanna Gassner - Main Photo 6 hours",
        "amount": 600.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-779",
        "date": "2025-05-25",
        "description": "Sales tax on remaining balance - $3,095.20",
        "amount": 138.39,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-765",
        "date": "2025-06-09",
        "description": "127.6 Miles",
        "amount": 95.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1019",
    "payments": [
      {
        "id": "sql-payment-order-1019",
        "date": "2024-09-21",
        "method": "card",
        "reference": "65S32808Y9378011R",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-591",
        "date": "2024-09-21",
        "description": "Order #1019 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1020",
    "payments": [
      {
        "id": "sql-payment-order-1020",
        "date": "2024-09-21",
        "method": "card",
        "reference": "83W12474F13921150",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-592",
        "date": "2024-09-21",
        "description": "Order #1020 expense",
        "amount": 1.12,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1021",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-593",
        "date": "2024-09-23",
        "description": "Order #1021 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1022",
    "payments": [
      {
        "id": "sql-payment-schedule-389",
        "date": "2024-09-23",
        "method": "PayPal",
        "reference": "4RJ934644V273651K",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-390",
        "date": "2025-05-04",
        "method": "Check",
        "reference": "109",
        "amount": 350.0
      },
      {
        "id": "sql-payment-schedule-439",
        "date": "2025-07-08",
        "method": "Check",
        "reference": "112",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-461",
        "date": "2025-08-25",
        "method": "Check",
        "reference": "114",
        "amount": 422.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-594",
        "date": "2024-09-23",
        "description": "4RJ934644V273651K",
        "amount": 16.34,
        "category": "Processing",
        "reference": "4RJ934644V273651K"
      },
      {
        "id": "sql-expense-913",
        "date": "2025-08-25",
        "description": "Order #1022 expense",
        "amount": 25.32,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-952",
        "date": "2025-09-21",
        "description": "Miles - 105.4\r\nWildcat, 4849 US-322, Franklin, PA 16323",
        "amount": 158.1,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-955",
        "date": "2025-09-21",
        "description": "Venmo - Emily Carson Second Shooter",
        "amount": 130.0,
        "category": "second shooter",
        "reference": "4427311820597321925"
      },
      {
        "id": "sql-expense-956",
        "date": "2025-09-21",
        "description": "McDonald\u2019s",
        "amount": 11.86,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1024",
    "payments": [
      {
        "id": "sql-payment-schedule-391",
        "date": "2024-09-27",
        "method": "Cash",
        "reference": "",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-393",
        "date": "2024-12-07",
        "method": "Cash",
        "reference": "",
        "amount": 375.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1025",
    "payments": [
      {
        "id": "sql-payment-order-1025",
        "date": "2024-10-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 85.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1026",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-595",
        "date": "2024-10-01",
        "description": "Order #1026 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1027",
    "payments": [
      {
        "id": "sql-payment-schedule-394",
        "date": "2024-10-01",
        "method": "PayPal",
        "reference": "7NW16171RF120580R",
        "amount": 530.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-596",
        "date": "2024-10-01",
        "description": "7NW16171RF120580R",
        "amount": 16.34,
        "category": "Processing",
        "reference": "7NW16171RF120580R"
      }
    ]
  },
  {
    "orderNumber": "1028",
    "payments": [
      {
        "id": "sql-payment-order-1028",
        "date": "2024-10-02",
        "method": "PayPal",
        "reference": "2FR81069GG315400M",
        "amount": 21.2
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-597",
        "date": "2024-10-02",
        "description": "Order #1028 expense",
        "amount": 1.23,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1031",
    "payments": [
      {
        "id": "sql-payment-order-1031",
        "date": "2024-10-10",
        "method": "Check",
        "reference": "Offline",
        "amount": 150.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1032",
    "payments": [
      {
        "id": "sql-payment-order-1032",
        "date": "2024-10-05",
        "method": "PayPal",
        "reference": "52103888VR1272458",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-600",
        "date": "2024-10-05",
        "description": "Order #1032 expense",
        "amount": 3.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1033",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-601",
        "date": "2024-10-06",
        "description": "Order #1033 expense",
        "amount": 16.34,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1034",
    "payments": [
      {
        "id": "sql-payment-schedule-397",
        "date": "2024-10-06",
        "method": "PayPal",
        "reference": "3TM38714HJ3498153",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-398",
        "date": "2025-09-27",
        "method": "Cash",
        "reference": "",
        "amount": 685.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-602",
        "date": "2024-10-06",
        "description": "3TM38714HJ3498153",
        "amount": 16.34,
        "category": "Processing",
        "reference": "3TM38714HJ3498153"
      },
      {
        "id": "sql-expense-963",
        "date": "2025-09-27",
        "description": "Miles - 49.8\r\n423 Small Rd Clarks Mills, PA",
        "amount": 74.7,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-981",
        "date": "2025-11-17",
        "description": "Video Editor",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1035",
    "payments": [
      {
        "id": "sql-payment-order-1035",
        "date": "2024-10-06",
        "method": "card",
        "reference": "47W43368K7181374C",
        "amount": 79.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-603",
        "date": "2024-10-06",
        "description": "Order #1035 expense",
        "amount": 2.87,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1036",
    "payments": [
      {
        "id": "sql-payment-order-1036",
        "date": "2024-10-14",
        "method": "card",
        "reference": "17X347543U364980B",
        "amount": 21.2
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1039",
    "payments": [
      {
        "id": "sql-payment-schedule-399",
        "date": "2024-10-30",
        "method": "Check",
        "reference": "1283",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-400",
        "date": "2025-05-08",
        "method": "PayPal",
        "reference": "5JE87438HH2051615",
        "amount": 3355.0
      },
      {
        "id": "sql-payment-schedule-440",
        "date": "2025-05-10",
        "method": "Cash",
        "reference": "",
        "amount": 400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-715",
        "date": "2025-05-08",
        "description": "Ava - Second shooter",
        "amount": 120.0,
        "category": "second shooter",
        "reference": "53341470L3355121B"
      },
      {
        "id": "sql-expense-716",
        "date": "2025-05-08",
        "description": "Breanna - Main shooter",
        "amount": 200.0,
        "category": "second shooter",
        "reference": "53341470L3355121B"
      },
      {
        "id": "sql-expense-717",
        "date": "2025-05-08",
        "description": "5JE87438HH2051615",
        "amount": 117.58,
        "category": "Processing",
        "reference": "5JE87438HH2051615"
      },
      {
        "id": "sql-expense-740",
        "date": "2025-05-10",
        "description": "Miles - 92.8\r\nThe Country Club of Meadville, 15955 State Rte 86, Meadville, PA 16335",
        "amount": 139.2,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-811",
        "date": "2025-05-10",
        "description": "Order #1039 expense",
        "amount": 13.03,
        "category": "food",
        "reference": ""
      },
      {
        "id": "sql-expense-783",
        "date": "2025-06-13",
        "description": "0007SP",
        "amount": 205.0,
        "category": "editor",
        "reference": "0414122733713"
      }
    ]
  },
  {
    "orderNumber": "1041",
    "payments": [
      {
        "id": "sql-payment-order-1041",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1043",
    "payments": [
      {
        "id": "sql-payment-order-1043",
        "date": "2024-10-20",
        "method": "PayPal",
        "reference": "24F51581879432357",
        "amount": 1031.25
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1045",
    "payments": [
      {
        "id": "sql-payment-order-1045",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1046",
    "payments": [
      {
        "id": "sql-payment-order-1046",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1047",
    "payments": [
      {
        "id": "sql-payment-order-1047",
        "date": "2024-10-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1048",
    "payments": [
      {
        "id": "sql-payment-order-1048",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1049",
    "payments": [
      {
        "id": "sql-payment-order-1049",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1051",
    "payments": [
      {
        "id": "sql-payment-order-1051",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1052",
    "payments": [
      {
        "id": "sql-payment-order-1052",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1053",
    "payments": [
      {
        "id": "sql-payment-order-1053",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1054",
    "payments": [
      {
        "id": "sql-payment-order-1054",
        "date": "2024-10-20",
        "method": "card",
        "reference": "56G41210WU842004H",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-604",
        "date": "2024-10-20",
        "description": "Order #1054 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1055",
    "payments": [
      {
        "id": "sql-payment-order-1055",
        "date": "2024-10-27",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1056",
    "payments": [
      {
        "id": "sql-payment-order-1056",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1057",
    "payments": [
      {
        "id": "sql-payment-order-1057",
        "date": "2024-10-20",
        "method": "PayPal",
        "reference": "2DC78146BB963873G",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-605",
        "date": "2024-10-20",
        "description": "Order #1057 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1059",
    "payments": [
      {
        "id": "sql-payment-order-1059",
        "date": "2024-10-20",
        "method": "PayPal",
        "reference": "3YL02072R3679460F",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-606",
        "date": "2024-10-20",
        "description": "Order #1059 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1060",
    "payments": [
      {
        "id": "sql-payment-order-1060",
        "date": "2024-10-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1061",
    "payments": [
      {
        "id": "sql-payment-order-1061",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1062",
    "payments": [
      {
        "id": "sql-payment-order-1062",
        "date": "2024-10-20",
        "method": "PayPal",
        "reference": "5UC11713BY631720N",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-607",
        "date": "2024-10-20",
        "description": "Order #1062 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1063",
    "payments": [
      {
        "id": "sql-payment-order-1063",
        "date": "2024-10-27",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1064",
    "payments": [
      {
        "id": "sql-payment-order-1064",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1065",
    "payments": [
      {
        "id": "sql-payment-order-1065",
        "date": "2024-11-09",
        "method": "Venmo",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1067",
    "payments": [
      {
        "id": "sql-payment-order-1067",
        "date": "2024-10-20",
        "method": "card",
        "reference": "6TK87245YL5819523",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-608",
        "date": "2024-10-20",
        "description": "Order #1067 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1068",
    "payments": [
      {
        "id": "sql-payment-order-1068",
        "date": "2024-10-29",
        "method": "Check",
        "reference": "7624",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1069",
    "payments": [
      {
        "id": "sql-payment-order-1069",
        "date": "2024-10-21",
        "method": "venmo",
        "reference": "6YD44898GK9904237",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-609",
        "date": "2024-10-21",
        "description": "Order #1069 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1070",
    "payments": [
      {
        "id": "sql-payment-order-1070",
        "date": "2024-10-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1071",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-610",
        "date": "2024-10-22",
        "description": "Order #1071 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1073",
    "payments": [
      {
        "id": "sql-payment-order-1073",
        "date": "2024-11-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 275.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1074",
    "payments": [
      {
        "id": "sql-payment-order-1074",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1075",
    "payments": [
      {
        "id": "sql-payment-order-1075",
        "date": "2024-10-26",
        "method": "PayPal",
        "reference": "8YM11354FW866972U",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-611",
        "date": "2024-10-26",
        "description": "Order #1075 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1077",
    "payments": [
      {
        "id": "sql-payment-order-1077",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1078",
    "payments": [
      {
        "id": "sql-payment-order-1078",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1079",
    "payments": [
      {
        "id": "sql-payment-order-1079",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1080",
    "payments": [
      {
        "id": "sql-payment-order-1080",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1082",
    "payments": [
      {
        "id": "sql-payment-order-1082",
        "date": "2024-10-27",
        "method": "PayPal",
        "reference": "6HH79376E4069094U",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-612",
        "date": "2024-10-27",
        "description": "Order #1082 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1083",
    "payments": [
      {
        "id": "sql-payment-order-1083",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1084",
    "payments": [
      {
        "id": "sql-payment-order-1084",
        "date": "2024-10-27",
        "method": "PayPal",
        "reference": "0EK62700NM2141818",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-613",
        "date": "2024-10-27",
        "description": "Order #1084 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1086",
    "payments": [
      {
        "id": "sql-payment-order-1086",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1087",
    "payments": [
      {
        "id": "sql-payment-order-1087",
        "date": "2024-10-27",
        "method": "PayPal",
        "reference": "3EC26870XX876905A",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-614",
        "date": "2024-10-27",
        "description": "Order #1087 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1089",
    "payments": [
      {
        "id": "sql-payment-order-1089",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1091",
    "payments": [
      {
        "id": "sql-payment-order-1091",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1092",
    "payments": [
      {
        "id": "sql-payment-order-1092",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1093",
    "payments": [
      {
        "id": "sql-payment-order-1093",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 44.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1094",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-615",
        "date": "2024-10-27",
        "description": "Order #1094 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1097",
    "payments": [
      {
        "id": "sql-payment-order-1097",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1098",
    "payments": [
      {
        "id": "sql-payment-order-1098",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1099",
    "payments": [
      {
        "id": "sql-payment-schedule-401",
        "date": "2024-10-27",
        "method": "PayPal",
        "reference": "28Y87675RD0949047",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-402",
        "date": "2025-06-22",
        "method": "venmo",
        "reference": "8P065175GU448452L",
        "amount": 1100.0
      },
      {
        "id": "sql-payment-schedule-468",
        "date": "2025-07-12",
        "method": "Check",
        "reference": "108",
        "amount": 200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-616",
        "date": "2024-10-27",
        "description": "28Y87675RD0949047",
        "amount": 19.69,
        "category": "Processing",
        "reference": "28Y87675RD0949047"
      },
      {
        "id": "sql-expense-793",
        "date": "2025-06-22",
        "description": "8P065175GU448452L",
        "amount": 38.88,
        "category": "Processing",
        "reference": "8P065175GU448452L"
      },
      {
        "id": "sql-expense-795",
        "date": "2025-06-22",
        "description": "Order #1099 expense",
        "amount": 62.43,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-794",
        "date": "2025-07-12",
        "description": "Miles 27.4",
        "amount": 41.1,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-860",
        "date": "2025-07-12",
        "description": "Order #1099 expense",
        "amount": 10.78,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1101",
    "payments": [
      {
        "id": "sql-payment-order-1101",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1102",
    "payments": [
      {
        "id": "sql-payment-order-1102",
        "date": "2024-10-27",
        "method": "card",
        "reference": "5L6744487D6009648",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-617",
        "date": "2024-10-27",
        "description": "Order #1102 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1103",
    "payments": [
      {
        "id": "sql-payment-order-1103",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1104",
    "payments": [
      {
        "id": "sql-payment-order-1104",
        "date": "2024-10-27",
        "method": "PayPal",
        "reference": "8HV8321515240984N",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1106",
    "payments": [
      {
        "id": "sql-payment-order-1106",
        "date": "2024-10-27",
        "method": "card",
        "reference": "5M2080372M869581E",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-618",
        "date": "2024-10-27",
        "description": "Order #1106 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1107",
    "payments": [
      {
        "id": "sql-payment-order-1107",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1108",
    "payments": [
      {
        "id": "sql-payment-order-1108",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1109",
    "payments": [
      {
        "id": "sql-payment-order-1109",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1110",
    "payments": [
      {
        "id": "sql-payment-order-1110",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1111",
    "payments": [
      {
        "id": "sql-payment-order-1111",
        "date": "2024-10-27",
        "method": "card",
        "reference": "78642485J79924458",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-619",
        "date": "2024-10-27",
        "description": "Order #1111 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1112",
    "payments": [
      {
        "id": "sql-payment-order-1112",
        "date": "2024-10-27",
        "method": "Venmo",
        "reference": "4188542553175143102",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1113",
    "payments": [
      {
        "id": "sql-payment-order-1113",
        "date": "2024-10-27",
        "method": "card",
        "reference": "5NY19931JM048120H",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1114",
    "payments": [
      {
        "id": "sql-payment-order-1114",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1119",
    "payments": [
      {
        "id": "sql-payment-order-1119",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "1YE51843MW248231R",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-620",
        "date": "2024-10-28",
        "description": "Order #1119 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1120",
    "payments": [
      {
        "id": "sql-payment-order-1120",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1121",
    "payments": [
      {
        "id": "sql-payment-order-1121",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1122",
    "payments": [
      {
        "id": "sql-payment-order-1122",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "07929155UJ293851C",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-621",
        "date": "2024-10-28",
        "description": "Order #1122 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1123",
    "payments": [
      {
        "id": "sql-payment-order-1123",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "2FW26531YB093205S",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-622",
        "date": "2024-10-28",
        "description": "Order #1123 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1124",
    "payments": [
      {
        "id": "sql-payment-order-1124",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "1M0559873H862213M",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1125",
    "payments": [
      {
        "id": "sql-payment-order-1125",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "2C363490SS408933R",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-623",
        "date": "2024-10-28",
        "description": "Order #1125 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1126",
    "payments": [
      {
        "id": "sql-payment-order-1126",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1129",
    "payments": [
      {
        "id": "sql-payment-order-1129",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1130",
    "payments": [
      {
        "id": "sql-payment-order-1130",
        "date": "2024-10-28",
        "method": "card",
        "reference": "5HU942067Y111030N",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1132",
    "payments": [
      {
        "id": "sql-payment-order-1132",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1133",
    "payments": [
      {
        "id": "sql-payment-order-1133",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1134",
    "payments": [
      {
        "id": "sql-payment-order-1134",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1135",
    "payments": [
      {
        "id": "sql-payment-order-1135",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1139",
    "payments": [
      {
        "id": "sql-payment-order-1139",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1140",
    "payments": [
      {
        "id": "sql-payment-order-1140",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1141",
    "payments": [
      {
        "id": "sql-payment-order-1141",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1142",
    "payments": [
      {
        "id": "sql-payment-order-1142",
        "date": "2024-10-28",
        "method": "PayPal",
        "reference": "6RP39251WH877764R",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-624",
        "date": "2024-10-28",
        "description": "Order #1142 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1144",
    "payments": [
      {
        "id": "sql-payment-order-1144",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1145",
    "payments": [
      {
        "id": "sql-payment-order-1145",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1149",
    "payments": [
      {
        "id": "sql-payment-order-1149",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1150",
    "payments": [
      {
        "id": "sql-payment-order-1150",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1154",
    "payments": [
      {
        "id": "sql-payment-order-1154",
        "date": "2024-10-29",
        "method": "venmo",
        "reference": "6MU34912D48815542",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-625",
        "date": "2024-10-29",
        "description": "Order #1154 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1155",
    "payments": [
      {
        "id": "sql-payment-order-1155",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1158",
    "payments": [
      {
        "id": "sql-payment-order-1158",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1159",
    "payments": [
      {
        "id": "sql-payment-order-1159",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1160",
    "payments": [
      {
        "id": "sql-payment-order-1160",
        "date": "2024-10-31",
        "method": "card",
        "reference": "221808111R705603R",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-626",
        "date": "2024-10-31",
        "description": "Order #1160 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1161",
    "payments": [
      {
        "id": "sql-payment-order-1161",
        "date": "2024-11-11",
        "method": "Cash",
        "reference": "Offline",
        "amount": 85.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1162",
    "payments": [
      {
        "id": "sql-payment-order-1162",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1163",
    "payments": [
      {
        "id": "sql-payment-order-1163",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1164",
    "payments": [
      {
        "id": "sql-payment-order-1164",
        "date": "2024-11-02",
        "method": "PayPal",
        "reference": "4YE53819HG2802334",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1165",
    "payments": [
      {
        "id": "sql-payment-order-1165",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1166",
    "payments": [
      {
        "id": "sql-payment-order-1166",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1167",
    "payments": [
      {
        "id": "sql-payment-order-1167",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1168",
    "payments": [
      {
        "id": "sql-payment-order-1168",
        "date": "2024-11-09",
        "method": "venmo",
        "reference": "29C05263G9430293W",
        "amount": 165.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-627",
        "date": "2024-11-09",
        "description": "Order #1168 expense",
        "amount": 6.25,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1169",
    "payments": [
      {
        "id": "sql-payment-order-1169",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1170",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-628",
        "date": "2024-11-14",
        "description": "Order #1170 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1171",
    "payments": [
      {
        "id": "sql-payment-schedule-403",
        "date": "2024-11-14",
        "method": "PayPal",
        "reference": "9EH76859LR918500J",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-404",
        "date": "2025-03-27",
        "method": "card",
        "reference": "39029045BA163233B",
        "amount": 786.5
      },
      {
        "id": "sql-payment-schedule-434",
        "date": "2025-04-24",
        "method": "PayPal",
        "reference": "6PV50936J29991333",
        "amount": 960.0
      },
      {
        "id": "sql-payment-schedule-450",
        "date": "2025-06-16",
        "method": "Zelle",
        "reference": "PNCAA0SdQ18R",
        "amount": 690.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-629",
        "date": "2024-11-14",
        "description": "9EH76859LR918500J",
        "amount": 16.94,
        "category": "Processing",
        "reference": "9EH76859LR918500J"
      },
      {
        "id": "sql-expense-701",
        "date": "2025-03-27",
        "description": "39029045BA163233B",
        "amount": 24.01,
        "category": "Processing",
        "reference": "39029045BA163233B"
      },
      {
        "id": "sql-expense-708",
        "date": "2025-04-24",
        "description": "PayPal Chargeback\r\nCase ID - PP-R-MDK-569677471",
        "amount": 786.5,
        "category": "Processing",
        "reference": "39029045BA163233B"
      },
      {
        "id": "sql-expense-709",
        "date": "2025-04-24",
        "description": "6PV50936J29991333",
        "amount": 28.7,
        "category": "Processing",
        "reference": "6PV50936J29991333"
      },
      {
        "id": "sql-expense-710",
        "date": "2025-04-24",
        "description": "PayPal Dispute Fee\r\nCase ID - PP-R-MDK-569677471",
        "amount": 25.0,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-733",
        "date": "2025-06-16",
        "description": "63.4 Miles",
        "amount": 47.55,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-784",
        "date": "2025-06-16",
        "description": "Breanna Gassner 3 hours main photo",
        "amount": 300.0,
        "category": "second shooter",
        "reference": "4356411811211576091"
      }
    ]
  },
  {
    "orderNumber": "1172",
    "payments": [
      {
        "id": "sql-payment-order-1172",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1173",
    "payments": [
      {
        "id": "sql-payment-order-1173",
        "date": "2025-01-04",
        "method": "Venmo",
        "reference": "4238304442808660057",
        "amount": 165.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-752",
        "date": "2025-01-04",
        "description": "Miles - 40.8\r\nMill Creek Park",
        "amount": 61.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1174",
    "payments": [
      {
        "id": "sql-payment-order-1174",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1175",
    "payments": [
      {
        "id": "sql-payment-order-1175",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 82.5
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1176",
    "payments": [
      {
        "id": "sql-payment-order-1176",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1177",
    "payments": [
      {
        "id": "sql-payment-order-1177",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1178",
    "payments": [
      {
        "id": "sql-payment-order-1178",
        "date": "2024-11-30",
        "method": "card",
        "reference": "29C61244H0692305N",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1179",
    "payments": [
      {
        "id": "sql-payment-order-1179",
        "date": "2024-11-24",
        "method": "PayPal",
        "reference": "67S88699YB282110G",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-630",
        "date": "2024-11-24",
        "description": "Order #1179 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1180",
    "payments": [
      {
        "id": "sql-payment-order-1180",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1181",
    "payments": [
      {
        "id": "sql-payment-order-1181",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1182",
    "payments": [
      {
        "id": "sql-payment-order-1182",
        "date": "2025-01-05",
        "method": "Check",
        "reference": "",
        "amount": 1155.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-753",
        "date": "2025-01-05",
        "description": "Miles - 110.8\r\n1512 Mercer Rd, Ellwood City, PA 16117",
        "amount": 166.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1183",
    "payments": [
      {
        "id": "sql-payment-order-1183",
        "date": "2024-11-24",
        "method": "card",
        "reference": "9CN550345M740771R",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1184",
    "payments": [
      {
        "id": "sql-payment-order-1184",
        "date": "2024-11-24",
        "method": "card",
        "reference": "7S7714409D8856253",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-631",
        "date": "2024-11-24",
        "description": "Order #1184 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1185",
    "payments": [
      {
        "id": "sql-payment-order-1185",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1186",
    "payments": [
      {
        "id": "sql-payment-order-1186",
        "date": "2024-11-24",
        "method": "card",
        "reference": "95F885390G2353923",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-632",
        "date": "2024-11-24",
        "description": "Order #1186 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1187",
    "payments": [
      {
        "id": "sql-payment-order-1187",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1188",
    "payments": [
      {
        "id": "sql-payment-order-1188",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1189",
    "payments": [
      {
        "id": "sql-payment-order-1189",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1190",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-633",
        "date": "2024-11-24",
        "description": "Order #1190 expense",
        "amount": 17.77,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1191",
    "payments": [
      {
        "id": "sql-payment-schedule-406",
        "date": "2024-11-24",
        "method": "PayPal",
        "reference": "5K188568KJ077553J",
        "amount": 495.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-634",
        "date": "2024-11-25",
        "description": "5K188568KJ077553J",
        "amount": 17.77,
        "category": "Processing",
        "reference": "5K188568KJ077553J"
      }
    ]
  },
  {
    "orderNumber": "1192",
    "payments": [
      {
        "id": "sql-payment-order-1192",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1193",
    "payments": [
      {
        "id": "sql-payment-order-1193",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1194",
    "payments": [
      {
        "id": "sql-payment-order-1194",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1195",
    "payments": [
      {
        "id": "sql-payment-order-1195",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1196",
    "payments": [
      {
        "id": "sql-payment-order-1196",
        "date": "2024-11-26",
        "method": "PayPal",
        "reference": "46474413N80931502",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-635",
        "date": "2024-11-26",
        "description": "Order #1196 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1197",
    "payments": [
      {
        "id": "sql-payment-order-1197",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1198",
    "payments": [
      {
        "id": "sql-payment-order-1198",
        "date": "2024-11-30",
        "method": "Offline",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1199",
    "payments": [
      {
        "id": "sql-payment-order-1199",
        "date": "2024-11-30",
        "method": "PayPal",
        "reference": "1CD08976AW995003L",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-636",
        "date": "2024-11-30",
        "description": "Order #1199 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1201",
    "payments": [
      {
        "id": "sql-payment-order-1201",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1202",
    "payments": [
      {
        "id": "sql-payment-order-1202",
        "date": "2024-12-09",
        "method": "Venmo",
        "reference": "4219363986108966806",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1203",
    "payments": [
      {
        "id": "sql-payment-order-1203",
        "date": "2024-12-01",
        "method": "PayPal",
        "reference": "919657899L743182J",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-637",
        "date": "2024-12-01",
        "description": "Order #1203 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1204",
    "payments": [
      {
        "id": "sql-payment-order-1204",
        "date": "2024-12-02",
        "method": "PayPal",
        "reference": "7PL63762M7633771J",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-638",
        "date": "2024-12-02",
        "description": "Order #1204 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1205",
    "payments": [
      {
        "id": "sql-payment-order-1205",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1206",
    "payments": [
      {
        "id": "sql-payment-order-1206",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1207",
    "payments": [
      {
        "id": "sql-payment-order-1207",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1210",
    "payments": [
      {
        "id": "sql-payment-schedule-408",
        "date": "2024-12-05",
        "method": "Venmo",
        "reference": "4216844504799018733",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-409",
        "date": "2025-10-16",
        "method": "Zelle",
        "reference": "PNCAA0VJS42z",
        "amount": 1287.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1012",
        "date": "2025-10-17",
        "description": "Order #1210 expense",
        "amount": 74.01,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1011",
        "date": "2025-10-18",
        "description": "Miles - 36\r\nStambaugh Auditorium",
        "amount": 54.0,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1211",
    "payments": [
      {
        "id": "sql-payment-order-1211",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1212",
    "payments": [
      {
        "id": "sql-payment-order-1212",
        "date": "2024-12-12",
        "method": "PayPal",
        "reference": "94S30318HD600593M",
        "amount": 660.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-641",
        "date": "2024-12-12",
        "description": "94S30318HD600593M",
        "amount": 19.73,
        "category": "Processing",
        "reference": "94S30318HD600593M"
      }
    ]
  },
  {
    "orderNumber": "1213",
    "payments": [
      {
        "id": "sql-payment-order-1213",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1214",
    "payments": [
      {
        "id": "sql-payment-order-1214",
        "date": "2024-12-11",
        "method": "venmo",
        "reference": "2P196146DW005600R",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-639",
        "date": "2024-12-11",
        "description": "Order #1214 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1215",
    "payments": [
      {
        "id": "sql-payment-order-1215",
        "date": "2024-12-11",
        "method": "PayPal",
        "reference": "0B8695236J041522T",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-640",
        "date": "2024-12-11",
        "description": "Order #1215 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1216",
    "payments": [
      {
        "id": "sql-payment-order-1216",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1217",
    "payments": [
      {
        "id": "sql-payment-order-1217",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1218",
    "payments": [
      {
        "id": "sql-payment-order-1218",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1220",
    "payments": [
      {
        "id": "sql-payment-schedule-441",
        "date": "2025-02-21",
        "method": "Venmo",
        "reference": "4273027996615903750",
        "amount": 302.5
      },
      {
        "id": "sql-payment-schedule-442",
        "date": "2025-06-21",
        "method": "Venmo",
        "reference": "4360034248217879269",
        "amount": 930.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-766",
        "date": "2025-06-22",
        "description": "Miles -  53.00 \r\nWillobrook",
        "amount": 79.5,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-792",
        "date": "2025-06-22",
        "description": "Order #1220 expense",
        "amount": 53.42,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-806",
        "date": "2025-06-22",
        "description": "Order #1220 expense",
        "amount": 12.07,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1222",
    "payments": [
      {
        "id": "sql-payment-order-1222",
        "date": "2024-12-19",
        "method": "PayPal",
        "reference": "59582210Y5527974K",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-642",
        "date": "2024-12-19",
        "description": "59582210Y5527974K",
        "amount": 9.87,
        "category": "Processing",
        "reference": "59582210Y5527974K"
      }
    ]
  },
  {
    "orderNumber": "1223",
    "payments": [
      {
        "id": "sql-payment-order-1223",
        "date": "2024-12-22",
        "method": "Offline",
        "reference": "Offline",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1224",
    "payments": [
      {
        "id": "sql-payment-order-1224",
        "date": "2024-12-22",
        "method": "card",
        "reference": "1R693484MV105312V",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-643",
        "date": "2024-12-22",
        "description": "Order #1224 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1226",
    "payments": [
      {
        "id": "sql-payment-schedule-410",
        "date": "2025-01-05",
        "method": "PayPal",
        "reference": "2YB91495V6268300M",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-411",
        "date": "2025-05-24",
        "method": "Check",
        "reference": "449",
        "amount": 2264.3
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-644",
        "date": "2025-01-05",
        "description": "2YB91495V6268300M",
        "amount": 16.94,
        "category": "Processing",
        "reference": "2YB91495V6268300M"
      },
      {
        "id": "sql-expense-781",
        "date": "2025-05-21",
        "description": "Sales tax on remaining balance -  $2,264.30",
        "amount": 129.05,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-722",
        "date": "2025-05-24",
        "description": "Breanna Gassner Second Shooter",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-746",
        "date": "2025-05-24",
        "description": "Miles - 18.2\r\nBig Oak Meadows",
        "amount": 27.3,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-810",
        "date": "2025-05-24",
        "description": "Order #1226 expense",
        "amount": 12.07,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1227",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-754",
        "date": "2025-02-01",
        "description": "Miles - 107.6\r\n230 Mercer St, Harmony, PA 16037",
        "amount": 161.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1228",
    "payments": [
      {
        "id": "sql-payment-order-1228",
        "date": "2025-01-13",
        "method": "PayPal",
        "reference": "46H10777JD586492U",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-676",
        "date": "2025-01-13",
        "description": "46H10777JD586492U",
        "amount": 9.87,
        "category": "Processing",
        "reference": "46H10777JD586492U"
      },
      {
        "id": "sql-expense-758",
        "date": "2025-06-08",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1229",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-678",
        "date": "2025-01-22",
        "description": "Order #1229 expense",
        "amount": 17.77,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1230",
    "payments": [
      {
        "id": "sql-payment-schedule-414",
        "date": "2025-01-22",
        "method": "PayPal",
        "reference": "1UY16638KX349261M",
        "amount": 495.0
      },
      {
        "id": "sql-payment-schedule-415",
        "date": "2025-07-10",
        "method": "Venmo",
        "reference": "4373820200338555535",
        "amount": 3245.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-679",
        "date": "2025-01-22",
        "description": "1UY16638KX349261M",
        "amount": 17.77,
        "category": "Processing",
        "reference": "1UY16638KX349261M"
      },
      {
        "id": "sql-expense-844",
        "date": "2025-07-10",
        "description": "Order #1230 expense",
        "amount": 167.14,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-845",
        "date": "2025-07-10",
        "description": "Breanna Gassner - Main Shooter 2 hours",
        "amount": 200.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-846",
        "date": "2025-07-10",
        "description": "Ashlyn Perkins - Second Shooter 4 hours\r\n$60/hr",
        "amount": 240.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1231",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-680",
        "date": "2025-01-22",
        "description": "Order #1231 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1232",
    "payments": [
      {
        "id": "sql-payment-schedule-416",
        "date": "2025-01-22",
        "method": "PayPal",
        "reference": "7AN41841UA430025A",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-681",
        "date": "2025-01-22",
        "description": "7AN41841UA430025A",
        "amount": 19.69,
        "category": "Processing",
        "reference": "7AN41841UA430025A"
      }
    ]
  },
  {
    "orderNumber": "1233",
    "payments": [
      {
        "id": "sql-payment-order-1233",
        "date": "2025-10-03",
        "method": "Cash",
        "reference": "Offline",
        "amount": 150.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-980",
        "date": "2025-10-03",
        "description": "Miles - 5.4\r\nShenango Dam",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1234",
    "payments": [
      {
        "id": "sql-payment-order-1234",
        "date": "2025-03-15",
        "method": "Venmo",
        "reference": "4289085458305812781",
        "amount": 400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-756",
        "date": "2025-03-15",
        "description": "Miles - 8.2\r\nAvalon Buhl",
        "amount": 12.3,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1235",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-682",
        "date": "2025-02-04",
        "description": "Order #1235 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1236",
    "payments": [
      {
        "id": "sql-payment-schedule-418",
        "date": "2025-02-04",
        "method": "PayPal",
        "reference": "3D252481SV9879026",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-683",
        "date": "2025-02-04",
        "description": "3D252481SV9879026",
        "amount": 16.94,
        "category": "Processing",
        "reference": "3D252481SV9879026"
      }
    ]
  },
  {
    "orderNumber": "1238",
    "payments": [
      {
        "id": "sql-payment-schedule-420",
        "date": "2025-03-28",
        "method": "Venmo",
        "reference": "4298302040932443669",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-427",
        "date": "2025-09-19",
        "method": "venmo",
        "reference": "3YG57959HG623654V",
        "amount": 248.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-949",
        "date": "2025-09-19",
        "description": "3YG57959HG623654V",
        "amount": 9.15,
        "category": "Processing",
        "reference": "3YG57959HG623654V"
      },
      {
        "id": "sql-expense-951",
        "date": "2025-09-19",
        "description": "Order #1238 expense",
        "amount": 7.19,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-950",
        "date": "2025-09-26",
        "description": "Miles - 146.6\r\nVirginias Beach Campground",
        "amount": 219.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1240",
    "payments": [
      {
        "id": "sql-payment-order-1240",
        "date": "2025-05-31",
        "method": "Cash",
        "reference": "Offline",
        "amount": 165.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-737",
        "date": "2025-05-31",
        "description": "Miles - 30.4\r\nRiverside Park Greenville",
        "amount": 45.6,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-775",
        "date": "2025-05-31",
        "description": "Sales Tax",
        "amount": 8.72,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1241",
    "payments": [
      {
        "id": "sql-payment-order-1241",
        "date": "2025-03-03",
        "method": "PayPal",
        "reference": "8L450347XU875424B",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-888",
        "date": "2025-03-02",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-685",
        "date": "2025-03-03",
        "description": "8L450347XU875424B",
        "amount": 9.87,
        "category": "Processing",
        "reference": "8L450347XU875424B"
      }
    ]
  },
  {
    "orderNumber": "1243",
    "payments": [
      {
        "id": "sql-payment-order-1243",
        "date": "2025-03-27",
        "method": "Check",
        "reference": "Offline",
        "amount": 22.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1247",
    "payments": [
      {
        "id": "sql-payment-order-1247",
        "date": "2025-03-03",
        "method": "PayPal",
        "reference": "3K7936400J6210618",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-686",
        "date": "2025-03-03",
        "description": "Order #1247 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1252",
    "payments": [
      {
        "id": "sql-payment-order-1252",
        "date": "2025-03-04",
        "method": "card",
        "reference": "1YH06388AC060145L",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-687",
        "date": "2025-03-04",
        "description": "Order #1252 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1255",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-688",
        "date": "2025-03-04",
        "description": "Order #1255 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1256",
    "payments": [
      {
        "id": "sql-payment-schedule-421",
        "date": "2025-03-04",
        "method": "PayPal",
        "reference": "2K869184HL063834M",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-422",
        "date": "2025-06-22",
        "method": "PayPal",
        "reference": "17F04154HD5971238",
        "amount": 935.0
      },
      {
        "id": "sql-payment-schedule-470",
        "date": "2025-08-08",
        "method": "Venmo",
        "reference": "4394945910998277271",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-689",
        "date": "2025-03-04",
        "description": "2K869184HL063834M",
        "amount": 16.94,
        "category": "Processing",
        "reference": "2K869184HL063834M"
      },
      {
        "id": "sql-expense-739",
        "date": "2025-06-21",
        "description": "Miles - 266\r\n339 Roaring Run Rd, Champion, PA 15622",
        "amount": 399.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-796",
        "date": "2025-06-22",
        "description": "17F04154HD5971238",
        "amount": 21.5,
        "category": "Processing",
        "reference": "17F04154HD5971238"
      },
      {
        "id": "sql-expense-797",
        "date": "2025-06-22",
        "description": "Order #1256 expense",
        "amount": 44.01,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-891",
        "date": "2025-08-08",
        "description": "Order #1256 expense",
        "amount": 19.8,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1257",
    "payments": [
      {
        "id": "sql-payment-order-1257",
        "date": "2025-03-09",
        "method": "PayPal",
        "reference": "7D046913F65831746",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-691",
        "date": "2025-03-09",
        "description": "Order #1257 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1259",
    "payments": [
      {
        "id": "sql-payment-order-1259",
        "date": "2025-05-20",
        "method": "Venmo",
        "reference": "4336695716049148904",
        "amount": 75.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-748",
        "date": "2025-05-20",
        "description": "Miles - 8.6\r\nBuhl Park Rose Garden",
        "amount": 12.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1260",
    "payments": [
      {
        "id": "sql-payment-order-1260",
        "date": "2025-04-18",
        "method": "Cash",
        "reference": "",
        "amount": 240.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-761",
        "date": "2025-06-09",
        "description": "Miles - 8.6\r\nShenango Dam",
        "amount": 12.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1263",
    "payments": [
      {
        "id": "sql-payment-schedule-432",
        "date": "2025-04-25",
        "method": "Venmo",
        "reference": "8M186010U8829841E",
        "amount": 50.0
      },
      {
        "id": "sql-payment-schedule-447",
        "date": "2025-05-26",
        "method": "Zelle",
        "reference": "PNCAA0SFv66S",
        "amount": 650.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-725",
        "date": "2025-05-25",
        "description": "Miles - 234\r\n2175 E National Pike, Scenery Hill, PA 15360",
        "amount": 351.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-726",
        "date": "2025-05-25",
        "description": "Breanna Gassner - Main Photographer\r\nOne hour plus travel",
        "amount": 150.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-727",
        "date": "2025-05-25",
        "description": "Carolyn Dean - Malma\r\nLove ya always..??",
        "amount": 2.24,
        "category": "Processing",
        "reference": "8M186010U8829841E"
      },
      {
        "id": "sql-expense-778",
        "date": "2025-05-25",
        "description": "Sales Tax on remaining balance - $650",
        "amount": 20.46,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-809",
        "date": "2025-05-25",
        "description": "Order #1263 expense",
        "amount": 20.0,
        "category": "food",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1265",
    "payments": [
      {
        "id": "sql-payment-schedule-423",
        "date": "2025-03-25",
        "method": "card",
        "reference": "74H80467FU218131F",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-424",
        "date": "2025-10-19",
        "method": "Check",
        "reference": "2249",
        "amount": 2026.9
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-698",
        "date": "2025-03-25",
        "description": "74H80467FU218131F",
        "amount": 15.44,
        "category": "Processing",
        "reference": "74H80467FU218131F"
      },
      {
        "id": "sql-expense-1015",
        "date": "2025-10-19",
        "description": "Breanna Gassner 1hour video",
        "amount": 100.0,
        "category": "second shooter",
        "reference": "4447240527638002411"
      },
      {
        "id": "sql-expense-1020",
        "date": "2025-10-19",
        "description": "Miles -  12.40 \r\nAmazing Grace Barn",
        "amount": 18.6,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1021",
        "date": "2025-10-19",
        "description": "Order #1265 expense",
        "amount": 114.5,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1266",
    "payments": [
      {
        "id": "sql-payment-schedule-425",
        "date": "2024-10-20",
        "method": "PayPal",
        "reference": "9BH64031W3301733P",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-426",
        "date": "2025-10-02",
        "method": "Check",
        "reference": "",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-695",
        "date": "2024-10-22",
        "description": "9BH64031W3301733P",
        "amount": 19.69,
        "category": "Processing",
        "reference": "9BH64031W3301733P"
      },
      {
        "id": "sql-expense-975",
        "date": "2025-10-02",
        "description": "Order #1266 expense",
        "amount": 31.46,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-974",
        "date": "2025-10-11",
        "description": "Miles - 62\r\nWestminster College - Wallace Chapel 319 South Market Street\r\nThe Corinthian - 47 Vine Avenue, Sharon PA",
        "amount": 93.0,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1269",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-741",
        "date": "2025-05-11",
        "description": "Miles - 89\r\nMcConnell's Mill",
        "amount": 133.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1271",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-757",
        "date": "2025-04-01",
        "description": "Miles - 39.8\r\n325 Youngstown Warren Rd, Niles, OH 44446",
        "amount": 59.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1272",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-906",
        "date": "2025-08-25",
        "description": "Miles - 172.4",
        "amount": 258.6,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1275",
    "payments": [
      {
        "id": "sql-payment-order-1275",
        "date": "2025-03-24",
        "method": "PayPal",
        "reference": "2MW31941DX6842135",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-696",
        "date": "2025-03-24",
        "description": "Order #1275 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1277",
    "payments": [
      {
        "id": "sql-payment-order-1277",
        "date": "2025-03-24",
        "method": "PayPal",
        "reference": "0U23675157306150G",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-697",
        "date": "2025-03-24",
        "description": "Order #1277 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1279",
    "payments": [
      {
        "id": "sql-payment-schedule-430",
        "date": "2025-04-18",
        "method": "Check",
        "reference": "",
        "amount": 250.0
      },
      {
        "id": "sql-payment-schedule-431",
        "date": "2025-07-09",
        "method": "Check",
        "reference": "149",
        "amount": 1180.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-767",
        "date": "2025-06-28",
        "description": "Miles - 125.8\r\n126 Serenity Ln, Renfrew, PA 16053",
        "amount": 188.7,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-805",
        "date": "2025-06-28",
        "description": "Order #1279 expense",
        "amount": 12.07,
        "category": "food",
        "reference": ""
      },
      {
        "id": "sql-expense-841",
        "date": "2025-07-09",
        "description": "Breanna Gassner - Main shooter + travel",
        "amount": 200.0,
        "category": "second shooter",
        "reference": "4373281903908559929"
      },
      {
        "id": "sql-expense-842",
        "date": "2025-07-09",
        "description": "Order #1279 expense",
        "amount": 53.14,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1282",
    "payments": [
      {
        "id": "sql-payment-order-1282",
        "date": "2025-03-26",
        "method": "PayPal",
        "reference": "1JS151356Y332415A",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-700",
        "date": "2025-03-26",
        "description": "Order #1282 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1284",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-760",
        "date": "2025-04-18",
        "description": "Miles - 89\r\nMcConnell's Mill",
        "amount": 133.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1286",
    "payments": [
      {
        "id": "sql-payment-order-1286",
        "date": "2025-03-27",
        "method": "card",
        "reference": "1KD12302D3827380P",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-702",
        "date": "2025-03-27",
        "description": "Order #1286 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1287",
    "payments": [
      {
        "id": "sql-payment-order-1287",
        "date": "2025-03-27",
        "method": "card",
        "reference": "4A370961RR286110D",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-703",
        "date": "2025-03-27",
        "description": "Order #1287 expense",
        "amount": 1.15,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1296",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-759",
        "date": "2025-04-14",
        "description": "Miles - 122.6\r\n215 Boardwalk Dr, Cranberry Twp, PA 16066",
        "amount": 183.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1298",
    "payments": [
      {
        "id": "sql-payment-schedule-428",
        "date": "2025-04-11",
        "method": "Zelle",
        "reference": "PNCAA0RJU99u",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-503",
        "date": "2025-11-02",
        "method": "card",
        "reference": "9NS99719GW836401N",
        "amount": 1438.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1028",
        "date": "2025-11-01",
        "description": "Miles - 26.6\r\nTurkey Run Hollow",
        "amount": 39.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1027",
        "date": "2025-11-02",
        "description": "Ian Chiodo - 2hrs Second Shooter - $60/hr",
        "amount": 120.0,
        "category": "second shooter",
        "reference": "3GJ54520E04422154"
      },
      {
        "id": "sql-expense-1029",
        "date": "2025-11-02",
        "description": "Order #1298 expense",
        "amount": 74.08,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1299",
    "payments": [
      {
        "id": "sql-payment-order-1299",
        "date": "2025-04-24",
        "method": "Cash",
        "reference": "Offline",
        "amount": 250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-762",
        "date": "2025-04-24",
        "description": "Miles - 8.8\r\nBuhl Park Golf Course",
        "amount": 13.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1301",
    "payments": [
      {
        "id": "sql-payment-schedule-462",
        "date": "2025-07-26",
        "method": "Cash",
        "reference": "",
        "amount": 2200.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-871",
        "date": "2025-07-26",
        "description": "Miles - 210",
        "amount": 315.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-874",
        "date": "2025-07-27",
        "description": "Toll",
        "amount": 6.5,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-875",
        "date": "2025-07-27",
        "description": "Breanna Gassner - Main Shooter 5 hours + $50 Travel",
        "amount": 550.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1302",
    "payments": [
      {
        "id": "sql-payment-order-1302",
        "date": "2025-05-26",
        "method": "Apple Pay",
        "reference": "a729e01d8ee6",
        "amount": 308.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-777",
        "date": "2025-05-26",
        "description": "Sales Tax",
        "amount": 15.1,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-744",
        "date": "2025-06-26",
        "description": "Miles - 38.6\r\nMill Creek Park",
        "amount": 57.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1304",
    "payments": [
      {
        "id": "sql-payment-schedule-437",
        "date": "2025-04-27",
        "method": "Venmo",
        "reference": "4320295495082313597",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1305",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-711",
        "date": "2025-04-25",
        "description": "Order #1305 expense",
        "amount": 2.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1306",
    "payments": [
      {
        "id": "sql-payment-order-1306",
        "date": "2025-08-09",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-908",
        "date": "2025-08-09",
        "description": "Miles - 12",
        "amount": 18.0,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1307",
    "payments": [
      {
        "id": "sql-payment-order-1307",
        "date": "2025-05-08",
        "method": "Cash App",
        "reference": "Offline",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-747",
        "date": "2025-05-23",
        "description": "Miles - 24.8\r\nKidds Mill Covered Bridge",
        "amount": 37.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1308",
    "payments": [
      {
        "id": "sql-payment-order-1308",
        "date": "2025-05-08",
        "method": "PayPal",
        "reference": "8PR43333EH1029057",
        "amount": 82.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-718",
        "date": "2025-05-08",
        "description": "Order #1308 expense",
        "amount": 3.37,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-750",
        "date": "2025-05-12",
        "description": "Miles - 1.2\r\n2230 Downing Ln, Hermitage, PA 16148",
        "amount": 1.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1310",
    "payments": [
      {
        "id": "sql-payment-schedule-443",
        "date": "2025-05-15",
        "method": "Zelle",
        "reference": "USAXNEULNSOJ",
        "amount": 424.0
      },
      {
        "id": "sql-payment-schedule-444",
        "date": "2025-10-03",
        "method": "Zelle",
        "reference": "USAVNSPIZAYU",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-493",
        "date": "2025-10-05",
        "method": "Zelle",
        "reference": "USABFVXATYDE",
        "amount": 1000.0
      },
      {
        "id": "sql-payment-schedule-494",
        "date": "2025-10-05",
        "method": "Check",
        "reference": "4039",
        "amount": 1492.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-983",
        "date": "2025-10-03",
        "description": "Order #1310 expense",
        "amount": 11.44,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-978",
        "date": "2025-10-05",
        "description": "Miles - 12.4\r\nAmazing Grace Barn",
        "amount": 18.6,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-984",
        "date": "2025-10-05",
        "description": "Order #1310 expense",
        "amount": 60.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-985",
        "date": "2025-10-05",
        "description": "Order #1310 expense",
        "amount": 89.52,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-986",
        "date": "2025-10-05",
        "description": "Ian Chiodo Second Shooter 5.5 hours - Venmo",
        "amount": 350.0,
        "category": "second shooter",
        "reference": "4437151465640626473"
      },
      {
        "id": "sql-expense-987",
        "date": "2025-10-05",
        "description": "Breanna Gassner Second Shooter 1hr - Cash",
        "amount": 100.0,
        "category": "second shooter",
        "reference": ""
      },
      {
        "id": "sql-expense-990",
        "date": "2025-11-17",
        "description": "Video Editor",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1311",
    "payments": [
      {
        "id": "sql-payment-order-1311",
        "date": "2025-06-10",
        "method": "PayPal",
        "reference": "59T37069271978457",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-764",
        "date": "2025-06-09",
        "description": "Miles - 7.6\r\nSunbelt",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-768",
        "date": "2025-06-10",
        "description": "59T37069271978457",
        "amount": 9.87,
        "category": "Processing",
        "reference": "59T37069271978457"
      },
      {
        "id": "sql-expense-774",
        "date": "2025-06-10",
        "description": "Sales Tax",
        "amount": 18.87,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1312",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-723",
        "date": "2025-05-25",
        "description": "Order #1312 expense",
        "amount": 13.65,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1313",
    "payments": [
      {
        "id": "sql-payment-schedule-445",
        "date": "2025-05-25",
        "method": "PayPal",
        "reference": "4BY05216US297572B",
        "amount": 440.0
      },
      {
        "id": "sql-payment-schedule-446",
        "date": "2025-08-11",
        "method": "Check",
        "reference": "1759",
        "amount": 916.8
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-724",
        "date": "2025-05-25",
        "description": "4BY05216US297572B",
        "amount": 13.65,
        "category": "Processing",
        "reference": "4BY05216US297572B"
      },
      {
        "id": "sql-expense-780",
        "date": "2025-05-25",
        "description": "Deposit Sales Tax",
        "amount": 25.58,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-892",
        "date": "2025-08-11",
        "description": "Miles - 129.8",
        "amount": 194.7,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-909",
        "date": "2025-08-11",
        "description": "Order #1313 expense",
        "amount": 49.96,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1314",
    "payments": [
      {
        "id": "sql-payment-order-1314",
        "date": "2025-08-01",
        "method": "Check",
        "reference": "2064",
        "amount": 175.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-886",
        "date": "2025-08-01",
        "description": "Miles - 20.4",
        "amount": 30.6,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-887",
        "date": "2025-08-01",
        "description": "Order #1314 expense",
        "amount": 9.58,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1315",
    "payments": [
      {
        "id": "sql-payment-order-1315",
        "date": "2025-07-05",
        "method": "Cash App",
        "reference": "Offline",
        "amount": 400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-832",
        "date": "2025-07-05",
        "description": "Miles -  44.20",
        "amount": 66.3,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-833",
        "date": "2025-07-05",
        "description": "Order #1315 expense",
        "amount": 22.01,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1316",
    "payments": [
      {
        "id": "sql-payment-schedule-448",
        "date": "2024-05-14",
        "method": "PayPal",
        "reference": "7RV16004HC968670J",
        "amount": 530.0
      },
      {
        "id": "sql-payment-schedule-449",
        "date": "2025-05-31",
        "method": "PayPal",
        "reference": "73J70420KL844541N",
        "amount": 132.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-734",
        "date": "2024-05-14",
        "description": "7RV16004HC968670J",
        "amount": 16.34,
        "category": "Processing",
        "reference": "7RV16004HC968670J"
      },
      {
        "id": "sql-expense-736",
        "date": "2025-05-30",
        "description": "Miles - 53\r\nWillobrook",
        "amount": 79.5,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-808",
        "date": "2025-05-30",
        "description": "Order #1316 expense",
        "amount": 11.32,
        "category": "food",
        "reference": ""
      },
      {
        "id": "sql-expense-735",
        "date": "2025-05-31",
        "description": "73J70420KL844541N",
        "amount": 5.11,
        "category": "Processing",
        "reference": "73J70420KL844541N"
      },
      {
        "id": "sql-expense-776",
        "date": "2025-05-31",
        "description": "Sales Tax on remaining balance $132.50",
        "amount": 5.26,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1317",
    "payments": [
      {
        "id": "sql-payment-order-1317",
        "date": "2025-06-03",
        "method": "Cash",
        "reference": "Offline",
        "amount": 225.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-743",
        "date": "2025-06-03",
        "description": "Miles - 19.60\r\nHermitage Sports Complex",
        "amount": 29.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1319",
    "payments": [
      {
        "id": "sql-payment-schedule-451",
        "date": "2025-06-10",
        "method": "Cash",
        "reference": "",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1320",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-769",
        "date": "2025-06-10",
        "description": "Order #1320 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1321",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-770",
        "date": "2025-06-10",
        "description": "21F375279J723942B",
        "amount": 19.69,
        "category": "Processing",
        "reference": "21F375279J723942B"
      }
    ]
  },
  {
    "orderNumber": "1322",
    "payments": [
      {
        "id": "sql-payment-schedule-455",
        "date": "2025-06-10",
        "method": "PayPal",
        "reference": "21F375279J723942B",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-771",
        "date": "2025-06-10",
        "description": "21F375279J723942B",
        "amount": 19.69,
        "category": "Processing",
        "reference": "21F375279J723942B"
      },
      {
        "id": "sql-expense-773",
        "date": "2025-06-10",
        "description": "Deposit Sales Tax",
        "amount": 25.52,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-772",
        "date": "2025-10-03",
        "description": "Miles - 6.6",
        "amount": 9.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1323",
    "payments": [
      {
        "id": "sql-payment-order-1323",
        "date": "2025-07-29",
        "method": "Venmo",
        "reference": "4387744657620555903",
        "amount": 90.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-881",
        "date": "2025-07-29",
        "description": "Miles - 30.2",
        "amount": 45.3,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-882",
        "date": "2025-07-29",
        "description": "Order #1323 expense",
        "amount": 4.04,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1324",
    "payments": [
      {
        "id": "sql-payment-order-1324",
        "date": "2025-06-18",
        "method": "Venmo",
        "reference": "4357918150153335872",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-791",
        "date": "2025-06-20",
        "description": "Order #1324 expense",
        "amount": 6.0,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1325",
    "payments": [
      {
        "id": "sql-payment-order-1325",
        "date": "2025-07-02",
        "method": "Check",
        "reference": "1236",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1326",
    "payments": [
      {
        "id": "sql-payment-order-1326",
        "date": "2025-06-18",
        "method": "card",
        "reference": "6MP764123W9154301",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-786",
        "date": "2025-06-18",
        "description": "Order #1326 expense",
        "amount": 1.99,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-790",
        "date": "2025-06-18",
        "description": "Order #1326 expense",
        "amount": 2.88,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1328",
    "payments": [
      {
        "id": "sql-payment-order-1328",
        "date": "2025-06-18",
        "method": "card",
        "reference": "6W895723P7301272K",
        "amount": 25.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-787",
        "date": "2025-06-18",
        "description": "Order #1328 expense",
        "amount": 1.24,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-789",
        "date": "2025-06-18",
        "description": "Order #1328 expense",
        "amount": 1.5,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1329",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-907",
        "date": "2025-08-21",
        "description": "Miles - 5.4",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1330",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-902",
        "date": "2025-08-19",
        "description": "Miles - 24.2",
        "amount": 36.3,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1331",
    "payments": [
      {
        "id": "sql-payment-order-1331",
        "date": "2025-06-19",
        "method": "card",
        "reference": "3K507446BX492561S",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-788",
        "date": "2025-06-20",
        "description": "Order #1331 expense",
        "amount": 5.79,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1333",
    "payments": [
      {
        "id": "sql-payment-order-1333",
        "date": "2025-07-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 90.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-828",
        "date": "2025-07-01",
        "description": "Miles - 6.4",
        "amount": 9.6,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1335",
    "payments": [
      {
        "id": "sql-payment-schedule-458",
        "date": "2025-07-01",
        "method": "Cash",
        "reference": "",
        "amount": 380.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-826",
        "date": "2025-07-01",
        "description": "Miles - 45.4",
        "amount": 68.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1336",
    "payments": [
      {
        "id": "sql-payment-order-1336",
        "date": "2025-10-02",
        "method": "Check",
        "reference": "8600",
        "amount": 308.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-801",
        "date": "2025-09-25",
        "description": "Miles - 52.80\r\nLanterman's Mill\r\nYoungstown Playhouse\r\nMill Creek Park",
        "amount": 79.2,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-973",
        "date": "2025-10-02",
        "description": "Order #1336 expense",
        "amount": 16.1,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1337",
    "payments": [
      {
        "id": "sql-payment-order-1337",
        "date": "2025-06-29",
        "method": "card",
        "reference": "09W88949YU0126512",
        "amount": 170.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-802",
        "date": "2025-06-29",
        "description": "Order #1337 expense",
        "amount": 5.59,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-804",
        "date": "2025-06-29",
        "description": "Order #1337 expense",
        "amount": 9.55,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-803",
        "date": "2025-07-17",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1338",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-901",
        "date": "2025-08-18",
        "description": "Miles - 40.2",
        "amount": 60.3,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1339",
    "payments": [
      {
        "id": "sql-payment-order-1339",
        "date": "2025-07-23",
        "method": "Cash",
        "reference": "Offline",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-869",
        "date": "2025-07-23",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1341",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-834",
        "date": "2025-07-07",
        "description": "Order #1341 expense",
        "amount": 9.99,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1342",
    "payments": [
      {
        "id": "sql-payment-order-1342",
        "date": "2025-07-07",
        "method": "venmo",
        "reference": "5TE29555A7143903F",
        "amount": 82.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-835",
        "date": "2025-07-07",
        "description": "Order #1342 expense",
        "amount": 3.37,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-836",
        "date": "2025-07-14",
        "description": "Miles - 8.2",
        "amount": 12.3,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1343",
    "payments": [
      {
        "id": "sql-payment-schedule-459",
        "date": "2025-07-07",
        "method": "PayPal",
        "reference": "0SP76867FY6856229",
        "amount": 272.25
      },
      {
        "id": "sql-payment-schedule-460",
        "date": "2025-11-11",
        "method": "Venmo",
        "reference": "4463674931780435985",
        "amount": 1315.88
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-838",
        "date": "2025-07-07",
        "description": "0SP76867FY6856229",
        "amount": 9.99,
        "category": "Processing",
        "reference": "0SP76867FY6856229"
      },
      {
        "id": "sql-expense-840",
        "date": "2025-07-07",
        "description": "Order #1343 expense",
        "amount": 15.74,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-839",
        "date": "2025-11-15",
        "description": "Miles - 170",
        "amount": 255.0,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1344",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-889",
        "date": "2025-08-09",
        "description": "Miles - 163.2\r\nHeinz Field",
        "amount": 244.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1345",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-847",
        "date": "2025-07-11",
        "description": "Order #1345 expense",
        "amount": 12.01,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1346",
    "payments": [
      {
        "id": "sql-payment-schedule-463",
        "date": "2025-07-11",
        "method": "PayPal",
        "reference": "90P21342915176156",
        "amount": 330.0
      },
      {
        "id": "sql-payment-schedule-464",
        "date": "2026-03-30",
        "method": "Venmo",
        "reference": "4564464956763114879",
        "amount": 1320.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-848",
        "date": "2025-07-11",
        "description": "Deposit Fees",
        "amount": 12.01,
        "category": "Processing",
        "reference": "90P21342915176156"
      },
      {
        "id": "sql-expense-849",
        "date": "2025-07-11",
        "description": "Order #1346 expense",
        "amount": 19.08,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1100",
        "date": "2026-03-30",
        "description": "Order #1346 expense",
        "amount": 79.2,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-851",
        "date": "2026-05-09",
        "description": "Buhl Mansion",
        "amount": 9.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1119",
        "date": "2026-05-09",
        "description": "Ashlyn Perks 3 hours",
        "amount": 260.0,
        "category": "second shooter",
        "reference": "4593687085274186266"
      },
      {
        "id": "sql-expense-1120",
        "date": "2026-05-09",
        "description": "Breanna 5 hours\r\n237 Cash, 263 Venmo",
        "amount": 500.0,
        "category": "second shooter",
        "reference": "4594725904031890995"
      }
    ]
  },
  {
    "orderNumber": "1347",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-852",
        "date": "2025-07-12",
        "description": "Order #1347 expense",
        "amount": 8.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1348",
    "payments": [
      {
        "id": "sql-payment-schedule-466",
        "date": "2022-03-30",
        "method": "Venmo",
        "reference": "",
        "amount": 377.0
      },
      {
        "id": "sql-payment-schedule-465",
        "date": "2025-07-12",
        "method": "PayPal",
        "reference": "4XN63478LG045553B",
        "amount": 242.0
      },
      {
        "id": "sql-payment-schedule-467",
        "date": "2026-05-09",
        "method": "Check",
        "reference": "",
        "amount": 1347.25
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-853",
        "date": "2025-07-12",
        "description": "4XN63478LG045553B",
        "amount": 8.94,
        "category": "Processing",
        "reference": "4XN63478LG045553B"
      },
      {
        "id": "sql-expense-854",
        "date": "2025-07-12",
        "description": "Order #1348 expense",
        "amount": 13.98,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-855",
        "date": "2026-05-09",
        "description": "Miles - 67.6",
        "amount": 101.4,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1118",
        "date": "2026-05-11",
        "description": "Video Edit",
        "amount": 200.0,
        "category": "editor",
        "reference": ""
      },
      {
        "id": "sql-expense-1121",
        "date": "2026-05-11",
        "description": "Order #1348 expense",
        "amount": 62.75,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1349",
    "payments": [
      {
        "id": "sql-payment-order-1349",
        "date": "2025-07-12",
        "method": "PayPal",
        "reference": "4C8702135S7093112",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-856",
        "date": "2025-07-12",
        "description": "Order #1349 expense",
        "amount": 2.24,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-857",
        "date": "2025-07-12",
        "description": "Order #1349 expense",
        "amount": 2.87,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1350",
    "payments": [
      {
        "id": "sql-payment-order-1350",
        "date": "2025-07-19",
        "method": "Cash",
        "reference": "Offline",
        "amount": 120.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-868",
        "date": "2025-07-19",
        "description": "Miles - 40.8",
        "amount": 61.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1351",
    "payments": [
      {
        "id": "sql-payment-order-1351",
        "date": "2025-07-12",
        "method": "venmo",
        "reference": "5CC2423004557502T",
        "amount": 250.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-858",
        "date": "2025-07-12",
        "description": "Order #1351 expense",
        "amount": 9.22,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-859",
        "date": "2025-07-12",
        "description": "Order #1351 expense",
        "amount": 14.45,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1352",
    "payments": [
      {
        "id": "sql-payment-order-1352",
        "date": "2025-07-14",
        "method": "card",
        "reference": "5HE838285N664610U",
        "amount": 137.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-862",
        "date": "2025-07-14",
        "description": "Order #1352 expense",
        "amount": 4.6,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-863",
        "date": "2025-07-14",
        "description": "Order #1352 expense",
        "amount": 4.95,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-861",
        "date": "2025-07-31",
        "description": "Miles -  69.20 \r\nHells Hollow",
        "amount": 103.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1355",
    "payments": [
      {
        "id": "sql-payment-order-1355",
        "date": "2025-07-22",
        "method": "card",
        "reference": "7CV56522GT808560N",
        "amount": 165.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-865",
        "date": "2025-07-22",
        "description": "Order #1355 expense",
        "amount": 5.42,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-867",
        "date": "2025-07-22",
        "description": "Order #1355 expense",
        "amount": 9.31,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-866",
        "date": "2025-08-14",
        "description": "Miles - 5.8",
        "amount": 8.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1356",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-870",
        "date": "2025-08-22",
        "description": "Miles - 75.2",
        "amount": 112.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1357",
    "payments": [
      {
        "id": "sql-payment-order-1357",
        "date": "2025-08-11",
        "method": "Cash",
        "reference": "Offline",
        "amount": 60.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-910",
        "date": "2025-08-11",
        "description": "Miles - 5.4",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1359",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-905",
        "date": "2025-08-21",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1360",
    "payments": [
      {
        "id": "sql-payment-order-1360",
        "date": "2025-09-01",
        "method": "Cash",
        "reference": "Offline",
        "amount": 275.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-924",
        "date": "2025-09-01",
        "description": "Miles - 7.60\r\nBuhl Park Rose Garden",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1361",
    "payments": [
      {
        "id": "sql-payment-order-1361",
        "date": "2025-09-19",
        "method": "Check",
        "reference": "Offline",
        "amount": 115.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-953",
        "date": "2025-09-19",
        "description": "Miles -  40.80 \r\nMill Creek Park",
        "amount": 61.2,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-954",
        "date": "2025-09-19",
        "description": "Order #1361 expense",
        "amount": 5.09,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1362",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-894",
        "date": "2025-08-22",
        "description": "Miles - 17.2",
        "amount": 12.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1363",
    "payments": [
      {
        "id": "sql-payment-order-1363",
        "date": "2025-08-22",
        "method": "Cash",
        "reference": "",
        "amount": 384.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-911",
        "date": "2025-08-22",
        "description": "Miles - 17.2",
        "amount": 25.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1364",
    "payments": [
      {
        "id": "sql-payment-order-1364",
        "date": "2025-08-17",
        "method": "card",
        "reference": "9JV545233E018035H",
        "amount": 20.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1365",
    "payments": [
      {
        "id": "sql-payment-order-1365",
        "date": "2025-11-09",
        "method": "Venmo",
        "reference": "17715816647",
        "amount": 300.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1032",
        "date": "2025-11-08",
        "description": "Miles -  54.40 \r\nOver Easy At The Depot, 152 Franklin Ave, Kent, OH 44240",
        "amount": 81.6,
        "category": "Mileage",
        "reference": "17715816647"
      },
      {
        "id": "sql-expense-1035",
        "date": "2025-11-09",
        "description": "Order #1365 expense",
        "amount": 13.1,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1366",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-898",
        "date": "2025-08-19",
        "description": "Order #1366 expense",
        "amount": 27.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1367",
    "payments": [
      {
        "id": "sql-payment-schedule-471",
        "date": "2025-08-19",
        "method": "PayPal",
        "reference": "1LM163846N7357437",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-899",
        "date": "2025-08-19",
        "description": "1LM163846N7357437",
        "amount": 27.94,
        "category": "Processing",
        "reference": "1LM163846N7357437"
      },
      {
        "id": "sql-expense-900",
        "date": "2025-08-19",
        "description": "Deposit Sales Tax",
        "amount": 31.32,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1368",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-904",
        "date": "2025-08-27",
        "description": "Miles - 41.8",
        "amount": 62.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1369",
    "payments": [
      {
        "id": "sql-payment-order-1369",
        "date": "2025-08-26",
        "method": "Cash",
        "reference": "Offline",
        "amount": 160.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-903",
        "date": "2025-08-26",
        "description": "Miles - 7.6",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1372",
    "payments": [
      {
        "id": "sql-payment-schedule-473",
        "date": "2025-08-29",
        "method": "Check",
        "reference": "141",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1373",
    "payments": [
      {
        "id": "sql-payment-order-1373",
        "date": "2025-08-24",
        "method": "Cash App",
        "reference": "D-88QK5P7N",
        "amount": 220.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-917",
        "date": "2025-08-24",
        "description": "Order #1373 expense",
        "amount": 13.2,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-916",
        "date": "2025-10-17",
        "description": "Miles -  67.20",
        "amount": 100.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1374",
    "payments": [
      {
        "id": "sql-payment-order-1374",
        "date": "2025-11-29",
        "method": "Venmo",
        "reference": "4476721903697486272",
        "amount": 88.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1375",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-914",
        "date": "2025-08-27",
        "description": "Order #1375 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1376",
    "payments": [
      {
        "id": "sql-payment-schedule-480",
        "date": "2025-08-28",
        "method": "PayPal",
        "reference": "7M943617KM622482P",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-481",
        "date": "2026-05-12",
        "method": "PayPal",
        "reference": "1LW072789J333084X",
        "amount": 2550.0
      },
      {
        "id": "sql-payment-schedule-548",
        "date": "2026-05-12",
        "method": "PayPal",
        "reference": "43K53065FK297281X",
        "amount": 1500.0
      },
      {
        "id": "sql-payment-schedule-549",
        "date": "2026-05-12",
        "method": "PayPal",
        "reference": "9V5678619T6669059",
        "amount": 1000.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-915",
        "date": "2025-08-28",
        "description": "7M943617KM622482P",
        "amount": 16.94,
        "category": "Processing",
        "reference": "7M943617KM622482P"
      },
      {
        "id": "sql-expense-918",
        "date": "2025-08-28",
        "description": "Order #1376 expense",
        "amount": 33.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1125",
        "date": "2026-05-12",
        "description": "1LW072789J333084X",
        "amount": 76.25,
        "category": "Processing",
        "reference": "1LW072789J333084X"
      },
      {
        "id": "sql-expense-1127",
        "date": "2026-05-12",
        "description": "43K53065FK297281X",
        "amount": 34.44,
        "category": "Processing",
        "reference": "43K53065FK297281X"
      },
      {
        "id": "sql-expense-1128",
        "date": "2026-05-12",
        "description": "9V5678619T6669059",
        "amount": 29.9,
        "category": "Processing",
        "reference": "9V5678619T6669059"
      },
      {
        "id": "sql-expense-1129",
        "date": "2026-05-12",
        "description": "Sales tax on the $2,550",
        "amount": 148.43,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1130",
        "date": "2026-05-12",
        "description": "Sales tax on $1,500",
        "amount": 87.93,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1131",
        "date": "2026-05-12",
        "description": "Sales tax on $1,000",
        "amount": 58.21,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1126",
        "date": "2026-05-16",
        "description": "Breanna Gassner 8 Hour main shooter",
        "amount": 800.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1377",
    "payments": [
      {
        "id": "sql-payment-schedule-482",
        "date": "2025-09-03",
        "method": "Cash",
        "reference": "",
        "amount": 423.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-927",
        "date": "2025-09-03",
        "description": "Miles -  7.60\r\nBuhl Park",
        "amount": 11.4,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1378",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-928",
        "date": "2025-11-26",
        "description": "Miles - 67.2\r\nHell's Hollow",
        "amount": 100.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1380",
    "payments": [
      {
        "id": "sql-payment-schedule-485",
        "date": "2025-09-21",
        "method": "Cash",
        "reference": "",
        "amount": 500.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1381",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-937",
        "date": "2025-09-12",
        "description": "Order #1381 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1382",
    "payments": [
      {
        "id": "sql-payment-schedule-487",
        "date": "2025-09-12",
        "method": "PayPal",
        "reference": "6N463520A8128254D",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-938",
        "date": "2025-09-12",
        "description": "6N463520A8128254D",
        "amount": 16.94,
        "category": "Processing",
        "reference": "6N463520A8128254D"
      },
      {
        "id": "sql-expense-939",
        "date": "2025-09-12",
        "description": "Order #1382 expense",
        "amount": 31.98,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1383",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-940",
        "date": "2025-09-22",
        "description": "Order #1383 expense",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1384",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-941",
        "date": "2025-09-29",
        "description": "Miles -  67.20 \r\nHell's Hollow",
        "amount": 100.8,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1386",
    "payments": [
      {
        "id": "sql-payment-schedule-489",
        "date": "2025-09-14",
        "method": "Venmo",
        "reference": "4421836013876019812",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-490",
        "date": "2026-01-02",
        "method": "Venmo",
        "reference": "4501658947422399710",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-512",
        "date": "2026-01-19",
        "method": "Check",
        "reference": "156",
        "amount": 500.0
      },
      {
        "id": "sql-payment-schedule-513",
        "date": "2026-03-19",
        "method": "Venmo",
        "reference": "4556374928959237929",
        "amount": 265.0
      },
      {
        "id": "sql-payment-schedule-514",
        "date": "2026-04-07",
        "method": "Venmo",
        "reference": "4570233440272948637",
        "amount": 908.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1057",
        "date": "2026-01-02",
        "description": "Sales Tax - $500 Payment 1/2/26",
        "amount": 30.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1071",
        "date": "2026-01-19",
        "description": "Order #1386 expense",
        "amount": 30.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-942",
        "date": "2026-04-04",
        "description": "Miles - 193.40\r\nQuincy Cellars",
        "amount": 290.1,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1107",
        "date": "2026-04-07",
        "description": "Order #1386 expense",
        "amount": 36.48,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1108",
        "date": "2026-04-10",
        "description": "Emily Carson - 3 hours (Venmo)",
        "amount": 180.0,
        "category": "second shooter",
        "reference": "4572612048853313560"
      }
    ]
  },
  {
    "orderNumber": "1387",
    "payments": [
      {
        "id": "sql-payment-order-1387",
        "date": "2025-09-19",
        "method": "PayPal",
        "reference": "26983069LR871830H",
        "amount": 280.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-946",
        "date": "2025-09-19",
        "description": "Order #1387 expense",
        "amount": 10.28,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-948",
        "date": "2025-09-19",
        "description": "Order #1387 expense",
        "amount": 15.97,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-947",
        "date": "2025-10-14",
        "description": "Miles -  5.40\r\nShenango Dam",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1388",
    "payments": [
      {
        "id": "sql-payment-order-1388",
        "date": "2025-10-10",
        "method": "Check",
        "reference": "1252",
        "amount": 198.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-998",
        "date": "2025-10-10",
        "description": "Miles - 40.8\r\nMill Creek Park",
        "amount": 61.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1389",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1007",
        "date": "2025-09-30",
        "description": "Miles -  5.40",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1391",
    "payments": [
      {
        "id": "sql-payment-order-1391",
        "date": "2025-11-14",
        "method": "Venmo",
        "reference": "4466047717601363839",
        "amount": 600.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1036",
        "date": "2025-11-14",
        "description": "Miles -  138.60 \r\n181 Wexford Bayne Rd suite 9, Wexford, PA 15090, USA",
        "amount": 207.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1037",
        "date": "2025-11-15",
        "description": "Order #1391 expense",
        "amount": 23.53,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1392",
    "payments": [
      {
        "id": "sql-payment-order-1392",
        "date": "2025-09-27",
        "method": "PayPal",
        "reference": "2Y5474078V332770L",
        "amount": 170.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-960",
        "date": "2025-09-27",
        "description": "Order #1392 expense",
        "amount": 6.44,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-962",
        "date": "2025-09-27",
        "description": "Order #1392 expense",
        "amount": 9.6,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-961",
        "date": "2025-10-29",
        "description": "Miles - 5.40 \r\nShenango Dam",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1394",
    "payments": [
      {
        "id": "sql-payment-schedule-491",
        "date": "2025-10-15",
        "method": "venmo",
        "reference": "2B085700LU8036935",
        "amount": 550.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1395",
    "payments": [
      {
        "id": "sql-payment-order-1395",
        "date": "2025-09-28",
        "method": "card",
        "reference": "326471283B976713G",
        "amount": 357.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-964",
        "date": "2025-09-28",
        "description": "Order #1395 expense",
        "amount": 11.18,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-966",
        "date": "2025-09-28",
        "description": "Order #1395 expense",
        "amount": 20.48,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-965",
        "date": "2025-11-06",
        "description": "Miles - 6.6\r\nBuhl Mansion",
        "amount": 9.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1396",
    "payments": [
      {
        "id": "sql-payment-order-1396",
        "date": "2025-10-09",
        "method": "Cash",
        "reference": "Offline",
        "amount": 190.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-997",
        "date": "2025-10-09",
        "description": "Miles - 27.80\r\nRiverside Park Greenville",
        "amount": 41.7,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1398",
    "payments": [
      {
        "id": "sql-payment-schedule-499",
        "date": "2026-02-10",
        "method": "Cash",
        "reference": "",
        "amount": 2400.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-967",
        "date": "2026-03-07",
        "description": "Miles - 176.60\r\nLake Erie Building, 13000 Athens Ave, Lakewood, OH 44107",
        "amount": 264.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1077",
        "date": "2026-03-07",
        "description": "Emily Carson - 2 Hours",
        "amount": 150.0,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1400",
    "payments": [
      {
        "id": "sql-payment-order-1400",
        "date": "2025-11-22",
        "method": "Cash",
        "reference": "Offline",
        "amount": 80.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1401",
    "payments": [
      {
        "id": "sql-payment-order-1401",
        "date": "2025-10-02",
        "method": "Venmo",
        "reference": "4433980271143583577",
        "amount": 88.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-976",
        "date": "2025-10-03",
        "description": "Order #1401 expense",
        "amount": 5.04,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-977",
        "date": "2025-10-06",
        "description": "Miles -  5.40 \r\nShenango Dam",
        "amount": 8.1,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1402",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-992",
        "date": "2025-10-24",
        "description": "Miles -  40.80 \r\nMill Creek Park",
        "amount": 61.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1403",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-993",
        "date": "2025-10-06",
        "description": "Order #1403 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1404",
    "payments": [
      {
        "id": "sql-payment-schedule-495",
        "date": "2025-10-06",
        "method": "PayPal",
        "reference": "6M297115772042431",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-994",
        "date": "2025-10-06",
        "description": "6M297115772042431",
        "amount": 16.94,
        "category": "Processing",
        "reference": "6M297115772042431"
      },
      {
        "id": "sql-expense-995",
        "date": "2026-06-12",
        "description": "Miles - 24\r\n2356 Mercer West Middlesex Rd, West Middlesex PA 16159",
        "amount": 36.0,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1405",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1038",
        "date": "2025-11-12",
        "description": "Miles -  24.80 \r\nKidds Mill Covered Bridge",
        "amount": 37.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1406",
    "payments": [
      {
        "id": "sql-payment-order-1406",
        "date": "2025-10-15",
        "method": "Venmo",
        "reference": "4444247541719516001",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1008",
        "date": "2025-10-15",
        "description": "Miles - 8.6\r\nBuhl Park Meadow",
        "amount": 12.9,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1010",
        "date": "2025-10-15",
        "description": "Order #1406 expense",
        "amount": 5.23,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1407",
    "payments": [
      {
        "id": "sql-payment-order-1407",
        "date": "2025-10-14",
        "method": "PayPal",
        "reference": "14D66077A5263813J",
        "amount": 165.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1004",
        "date": "2025-10-14",
        "description": "Order #1407 expense",
        "amount": 6.25,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-1005",
        "date": "2025-10-27",
        "description": "Miles -  14.40 \r\n3906 Wynwood Dr, Sharpsville, PA 16150",
        "amount": 21.6,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1408",
    "payments": [
      {
        "id": "sql-payment-order-1408",
        "date": "2025-10-17",
        "method": "venmo",
        "reference": "1PG50467039807643",
        "amount": 88.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1013",
        "date": "2025-10-17",
        "description": "Order #1408 expense",
        "amount": 3.56,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-1014",
        "date": "2025-10-21",
        "description": "Miles - 8.6\r\nShenango Dam",
        "amount": 12.9,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1410",
    "payments": [
      {
        "id": "sql-payment-schedule-497",
        "date": "2025-10-19",
        "method": "Cash App",
        "reference": "",
        "amount": 275.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1411",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1016",
        "date": "2025-11-17",
        "description": "Miles - 44.8\r\nLanterman's Mill",
        "amount": 67.2,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1415",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1023",
        "date": "2025-10-28",
        "description": "Miles - 12.4\r\nAmazing Grace Barn",
        "amount": 18.6,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1416",
    "payments": [
      {
        "id": "sql-payment-order-1416",
        "date": "2025-11-01",
        "method": "venmo",
        "reference": "0R528095GA1503431",
        "amount": 50.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1026",
        "date": "2025-11-01",
        "description": "Order #1416 expense",
        "amount": 2.24,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1418",
    "payments": [
      {
        "id": "sql-payment-order-1418",
        "date": "2025-12-06",
        "method": "Cash",
        "reference": "Offline",
        "amount": 160.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1030",
        "date": "2025-11-08",
        "description": "Miles -  20.30 \r\nDavid Grohl Alley, Warren, OH 44481",
        "amount": 30.45,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1419",
    "payments": [
      {
        "id": "sql-payment-order-1419",
        "date": "2025-11-10",
        "method": "Venmo",
        "reference": "4463096260518922679",
        "amount": 110.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1033",
        "date": "2025-11-10",
        "description": "Miles - 2\r\n1739 N Water Ave. Hermitage, PA 16148",
        "amount": 3.0,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1034",
        "date": "2025-11-10",
        "description": "Order #1419 expense",
        "amount": 6.42,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1422",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1042",
        "date": "2025-11-23",
        "description": "Order #1422 expense",
        "amount": 16.94,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1423",
    "payments": [
      {
        "id": "sql-payment-schedule-504",
        "date": "2025-11-23",
        "method": "PayPal",
        "reference": "6PR06738KW094725Y",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1043",
        "date": "2025-11-24",
        "description": "PayPal Checkout\r\ncard",
        "amount": 16.94,
        "category": "Processing",
        "reference": "6PR06738KW094725Y"
      },
      {
        "id": "sql-expense-1044",
        "date": "2025-11-24",
        "description": "Sales tax on Deposit",
        "amount": 31.98,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1424",
    "payments": [
      {
        "id": "sql-payment-order-1424",
        "date": "2025-11-16",
        "method": "Venmo",
        "reference": "",
        "amount": 100.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1429",
    "payments": [
      {
        "id": "sql-payment-schedule-506",
        "date": "2025-12-06",
        "method": "Cash",
        "reference": "",
        "amount": 4375.0
      },
      {
        "id": "sql-payment-schedule-507",
        "date": "2025-12-06",
        "method": "Venmo",
        "reference": "",
        "amount": 1760.0
      },
      {
        "id": "sql-payment-schedule-508",
        "date": "2025-12-06",
        "method": "Breanna Venmo",
        "reference": "",
        "amount": 4.0
      },
      {
        "id": "sql-payment-schedule-509",
        "date": "2025-12-06",
        "method": "Breanna Venmo",
        "reference": "",
        "amount": 40.0
      },
      {
        "id": "sql-payment-schedule-510",
        "date": "2025-12-06",
        "method": "PayPal",
        "reference": "",
        "amount": 20.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1045",
        "date": "2025-12-06",
        "description": "Order #1429 expense",
        "amount": 350.0,
        "category": "supplies",
        "reference": ""
      },
      {
        "id": "sql-expense-1046",
        "date": "2025-12-06",
        "description": "Ian Chiodo",
        "amount": 350.0,
        "category": "Hire",
        "reference": "4482528771707620397"
      },
      {
        "id": "sql-expense-1047",
        "date": "2025-12-06",
        "description": "Emily Carson",
        "amount": 350.0,
        "category": "second shooter",
        "reference": "4482528606627960574"
      },
      {
        "id": "sql-expense-1048",
        "date": "2025-12-06",
        "description": "Kady Swogger - Check in help",
        "amount": 150.0,
        "category": "donation",
        "reference": ""
      },
      {
        "id": "sql-expense-1049",
        "date": "2025-12-06",
        "description": "Jennifer Ray Check in help",
        "amount": 130.0,
        "category": "donation",
        "reference": ""
      },
      {
        "id": "sql-expense-1050",
        "date": "2025-12-06",
        "description": "Another Chance Animal Rescue Split",
        "amount": 2437.0,
        "category": "donation",
        "reference": ""
      },
      {
        "id": "sql-expense-1051",
        "date": "2025-12-06",
        "description": "Breanna Gassner Split",
        "amount": 1218.5,
        "category": "second shooter",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1430",
    "payments": [
      {
        "id": "sql-payment-order-1430",
        "date": "2025-12-15",
        "method": "Cash",
        "reference": "Offline",
        "amount": 75.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1432",
    "payments": [
      {
        "id": "sql-payment-order-1432",
        "date": "2026-01-05",
        "method": "Cash",
        "reference": "Offline",
        "amount": 165.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1435",
    "payments": [
      {
        "id": "sql-payment-order-1435",
        "date": "2026-01-02",
        "method": "Cash",
        "reference": "",
        "amount": 100.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1055",
        "date": "2026-01-02",
        "description": "Miles - 34.40\r\nMercer County Courthouse",
        "amount": 51.6,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1436",
    "payments": [
      {
        "id": "sql-payment-order-1436",
        "date": "2026-01-03",
        "method": "card",
        "reference": "72U32617XR430753X",
        "amount": 577.5
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1058",
        "date": "2026-01-02",
        "description": "Miles - 69.40\r\nInside Sola Salons, 181 Wexford Bayne Rd, Wexford, PA 15090",
        "amount": 104.1,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1059",
        "date": "2026-01-03",
        "description": "Order #1436 expense",
        "amount": 20.64,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1437",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1060",
        "date": "2026-01-07",
        "description": "Order #1437 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1438",
    "payments": [
      {
        "id": "sql-payment-schedule-515",
        "date": "2026-01-07",
        "method": "PayPal",
        "reference": "6S676610ED188315U",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1061",
        "date": "2026-01-07",
        "description": "6S676610ED188315U",
        "amount": 19.69,
        "category": "Processing",
        "reference": "6S676610ED188315U"
      },
      {
        "id": "sql-expense-1063",
        "date": "2026-01-07",
        "description": "Sales tax on deposit",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1062",
        "date": "2026-06-06",
        "description": "Miles - 17\r\nTara",
        "amount": 25.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1439",
    "payments": [
      {
        "id": "sql-payment-order-1439",
        "date": "2026-01-14",
        "method": "card",
        "reference": "5G376774PK925740L",
        "amount": 22.05
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1064",
        "date": "2026-01-14",
        "description": "Order #1439 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1440",
    "payments": [
      {
        "id": "sql-payment-order-1440",
        "date": "2026-02-08",
        "method": "card",
        "reference": "0K6737076L975152K",
        "amount": 137.8
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1075",
        "date": "2026-02-07",
        "description": "Mileage 17\r\nTara",
        "amount": 25.5,
        "category": "Mileage",
        "reference": ""
      },
      {
        "id": "sql-expense-1074",
        "date": "2026-02-09",
        "description": "Order #1440 expense",
        "amount": 5.3,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1441",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1065",
        "date": "2026-01-17",
        "description": "Order #1441 expense",
        "amount": 25.19,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1442",
    "payments": [
      {
        "id": "sql-payment-schedule-517",
        "date": "2026-01-18",
        "method": "PayPal",
        "reference": "5EB95024W4229341M",
        "amount": 495.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1066",
        "date": "2026-01-18",
        "description": "5EB95024W4229341M",
        "amount": 25.19,
        "category": "Processing",
        "reference": "5EB95024W4229341M"
      },
      {
        "id": "sql-expense-1067",
        "date": "2026-01-18",
        "description": "Sales tax on deposit",
        "amount": 28.19,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1443",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1068",
        "date": "2026-01-18",
        "description": "Order #1443 expense",
        "amount": 17.77,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1444",
    "payments": [
      {
        "id": "sql-payment-schedule-519",
        "date": "2026-01-18",
        "method": "PayPal",
        "reference": "6TP3181905207231H",
        "amount": 495.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1069",
        "date": "2026-01-18",
        "description": "6TP3181905207231H",
        "amount": 17.77,
        "category": "Processing",
        "reference": "6TP3181905207231H"
      },
      {
        "id": "sql-expense-1070",
        "date": "2026-01-18",
        "description": "Sales tax on deposit",
        "amount": 28.63,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1446",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1072",
        "date": "2026-04-03",
        "description": "Miles - 89\r\nMcConnell's Mill",
        "amount": 133.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1447",
    "payments": [
      {
        "id": "sql-payment-order-1447",
        "date": "2026-02-10",
        "method": "PayPal",
        "reference": "31109480NM952703U",
        "amount": 22.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1076",
        "date": "2026-02-10",
        "description": "Order #1447 expense",
        "amount": 1.26,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1448",
    "payments": [
      {
        "id": "sql-payment-order-1448",
        "date": "2026-02-28",
        "method": "PayPal",
        "reference": "8U9884252R8362808",
        "amount": 253.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1092",
        "date": "2026-02-28",
        "description": "8U9884252R8362808",
        "amount": 9.32,
        "category": "Processing",
        "reference": "8U9884252R8362808"
      }
    ]
  },
  {
    "orderNumber": "1450",
    "payments": [
      {
        "id": "sql-payment-schedule-521",
        "date": "2026-02-11",
        "method": "PayPal",
        "reference": "8KS04869U2290245M",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1078",
        "date": "2026-02-11",
        "description": "8KS04869U2290245M",
        "amount": 19.69,
        "category": "Processing",
        "reference": "8KS04869U2290245M"
      },
      {
        "id": "sql-expense-1079",
        "date": "2026-02-11",
        "description": "Deposit sales tax",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1451",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1080",
        "date": "2026-02-11",
        "description": "Order #1451 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1452",
    "payments": [
      {
        "id": "sql-payment-schedule-523",
        "date": "2026-02-11",
        "method": "PayPal",
        "reference": "1UW78311E28377123",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-524",
        "date": "2026-03-10",
        "method": "Zelle",
        "reference": "H50279405801",
        "amount": 120.0
      },
      {
        "id": "sql-payment-schedule-525",
        "date": "2026-04-06",
        "method": "Zelle",
        "reference": "H50282364372",
        "amount": 115.0
      },
      {
        "id": "sql-payment-schedule-526",
        "date": "2026-05-11",
        "method": "Zelle",
        "reference": "H50PZtBcKxtW",
        "amount": 120.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1082",
        "date": "2026-02-11",
        "description": "Order #1452 expense",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1081",
        "date": "2026-02-12",
        "description": "1UW78311E28377123",
        "amount": 19.69,
        "category": "Processing",
        "reference": "1UW78311E28377123"
      },
      {
        "id": "sql-expense-1124",
        "date": "2026-05-11",
        "description": "Order #1452 expense",
        "amount": 7.2,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1453",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1083",
        "date": "2026-02-16",
        "description": "Order #1453 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1454",
    "payments": [
      {
        "id": "sql-payment-schedule-530",
        "date": "2026-02-16",
        "method": "PayPal",
        "reference": "0JY64011UV082102X",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1084",
        "date": "2026-02-16",
        "description": "0JY64011UV082102X",
        "amount": 19.69,
        "category": "Processing",
        "reference": "0JY64011UV082102X"
      },
      {
        "id": "sql-expense-1091",
        "date": "2026-02-16",
        "description": "Deposit Sales Tax",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1455",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1085",
        "date": "2026-02-21",
        "description": "Order #1455 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1456",
    "payments": [
      {
        "id": "sql-payment-order-1456",
        "date": "2026-04-03",
        "method": "Venmo",
        "reference": "4567633941541218982",
        "amount": 165.0
      }
    ],
    "expenses": []
  },
  {
    "orderNumber": "1457",
    "payments": [
      {
        "id": "sql-payment-schedule-532",
        "date": "2026-02-21",
        "method": "PayPal",
        "reference": "7AL206536N6786848",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1086",
        "date": "2026-02-21",
        "description": "Deposit PayPal Fees",
        "amount": 19.69,
        "category": "Processing",
        "reference": "7AL206536N6786848"
      },
      {
        "id": "sql-expense-1090",
        "date": "2026-02-21",
        "description": "Deposit Sales Tax",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1458",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1087",
        "date": "2026-02-23",
        "description": "Order #1458 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1459",
    "payments": [
      {
        "id": "sql-payment-schedule-534",
        "date": "2026-02-23",
        "method": "PayPal",
        "reference": "17L06874D2296940G",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-535",
        "date": "2026-04-27",
        "method": "PayPal",
        "reference": "6TN05104VY797963Y",
        "amount": 1045.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1088",
        "date": "2026-02-23",
        "description": "Deposit PayPal Fees",
        "amount": 19.69,
        "category": "Processing",
        "reference": "17L06874D2296940G"
      },
      {
        "id": "sql-expense-1089",
        "date": "2026-02-23",
        "description": "Deposit Sales Tax",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1460",
    "payments": [
      {
        "id": "sql-payment-order-1460",
        "date": "2026-03-02",
        "method": "card",
        "reference": "2W361124Y7611324A",
        "amount": 385.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1093",
        "date": "2026-03-02",
        "description": "Order #1460 expense",
        "amount": 13.93,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1462",
    "payments": [
      {
        "id": "sql-payment-schedule-536",
        "date": "2026-03-07",
        "method": "PayPal",
        "reference": "98M9108011021381K",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1096",
        "date": "2026-03-08",
        "description": "98M9108011021381K",
        "amount": 19.69,
        "category": "Processing",
        "reference": "98M9108011021381K"
      }
    ]
  },
  {
    "orderNumber": "1465",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1097",
        "date": "2026-03-29",
        "description": "Order #1465 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1466",
    "payments": [
      {
        "id": "sql-payment-schedule-538",
        "date": "2026-03-29",
        "method": "PayPal",
        "reference": "16116514EU601924U",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1098",
        "date": "2026-03-29",
        "description": "16116514EU601924U",
        "amount": 19.69,
        "category": "Processing",
        "reference": "16116514EU601924U"
      },
      {
        "id": "sql-expense-1099",
        "date": "2026-03-29",
        "description": "Order #1466 expense",
        "amount": 33.0,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1467",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1101",
        "date": "2026-03-30",
        "description": "Order #1467 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1468",
    "payments": [
      {
        "id": "sql-payment-schedule-540",
        "date": "2026-03-30",
        "method": "PayPal",
        "reference": "9U701111G2844540J",
        "amount": 550.0
      },
      {
        "id": "sql-payment-schedule-541",
        "date": "2026-05-01",
        "method": "card",
        "reference": "6B485465XN573424H",
        "amount": 2750.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1102",
        "date": "2026-03-30",
        "description": "9U701111G2844540J",
        "amount": 19.69,
        "category": "Processing",
        "reference": "9U701111G2844540J"
      },
      {
        "id": "sql-expense-1103",
        "date": "2026-03-30",
        "description": "Order #1468 expense",
        "amount": 33.0,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1115",
        "date": "2026-05-01",
        "description": "Order #1468 expense",
        "amount": 145.26,
        "category": "Sales Tax",
        "reference": ""
      },
      {
        "id": "sql-expense-1114",
        "date": "2026-05-02",
        "description": "Warner Theater and church 77.5 miles",
        "amount": 232.5,
        "category": "Mileage",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1469",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1105",
        "date": "2026-04-03",
        "description": "Order #1469 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1470",
    "payments": [
      {
        "id": "sql-payment-schedule-542",
        "date": "2026-04-03",
        "method": "PayPal",
        "reference": "9W336347KB155373B",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1106",
        "date": "2026-04-03",
        "description": "9W336347KB155373B",
        "amount": 19.69,
        "category": "Processing",
        "reference": "9W336347KB155373B"
      }
    ]
  },
  {
    "orderNumber": "1471",
    "payments": [
      {
        "id": "sql-payment-order-1471",
        "date": "2026-04-19",
        "method": "card",
        "reference": "2MV90659GE520331H",
        "amount": 330.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1109",
        "date": "2026-04-19",
        "description": "Order #1471 expense",
        "amount": 12.01,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-1111",
        "date": "2026-04-20",
        "description": "Order #1471 expense",
        "amount": 19.08,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1472",
    "payments": [],
    "expenses": [
      {
        "id": "sql-expense-1110",
        "date": "2026-04-20",
        "description": "Order #1472 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1473",
    "payments": [
      {
        "id": "sql-payment-schedule-544",
        "date": "2026-04-20",
        "method": "PayPal",
        "reference": "84J34146M7741114B",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1112",
        "date": "2026-04-20",
        "description": "84J34146M7741114B",
        "amount": 19.69,
        "category": "Processing",
        "reference": "84J34146M7741114B"
      },
      {
        "id": "sql-expense-1113",
        "date": "2026-04-20",
        "description": "Order #1473 expense",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1475",
    "payments": [
      {
        "id": "sql-payment-schedule-546",
        "date": "2026-05-10",
        "method": "PayPal",
        "reference": "15A17391Y57537503",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1122",
        "date": "2026-05-11",
        "description": "15A17391Y57537503",
        "amount": 19.69,
        "category": "Processing",
        "reference": "15A17391Y57537503"
      },
      {
        "id": "sql-expense-1123",
        "date": "2026-05-11",
        "description": "Deposit Sales Tax",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  },
  {
    "orderNumber": "1477",
    "payments": [
      {
        "id": "sql-payment-order-1477",
        "date": "2026-05-13",
        "method": "card",
        "reference": "8VF82890W5456141U",
        "amount": 550.0
      }
    ],
    "expenses": [
      {
        "id": "sql-expense-1132",
        "date": "2026-05-13",
        "description": "Order #1477 expense",
        "amount": 19.69,
        "category": "Processing",
        "reference": ""
      },
      {
        "id": "sql-expense-1133",
        "date": "2026-05-13",
        "description": "Order #1477 expense",
        "amount": 31.82,
        "category": "Sales Tax",
        "reference": ""
      }
    ]
  }
];
