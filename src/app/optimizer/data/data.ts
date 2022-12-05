import { Prices } from "./data.type";

export const initial: Prices = {
  metrics: {
    revenue: {
      current: 12000,
      unit: "$",
      projected: 12000
    },
    sales: {
      current: 3000,
      unit: "$",
      projected: 3000
    },
    margin: {
      current: 3000,
      unit: "$",
      projected: 3000
    }
  },
  stores: [{
    id: "123er",
    name: "24/7 Kansas",
    owner: "Anshuman B",
    inventory: [{
      skuid: "123",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 12",
      price: {
        recommended: 110,
        current: 100,
        startrange: 90,
        endrange: 120,
        unit: "$",
      },
      alert: {
        status: 'warning',
        details: "This items cannot cost more than item239"
      }
    }, {
      skuid: "23",
      units: 200,
      category: "fast selling",
      image: "trousers.jpg",
      name: "Trousers abcd",
      price: {
        recommended: 1210,
        current: 1020,
        startrange: 500,
        endrange: 1220,
        unit: "$",
      },
      alert: {
        status: 'pending'
      }
    }, {
      skuid: "890",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 87",
      price: {
        recommended: 1300,
        current: 1256,
        startrange: 1000,
        endrange: 1400,
        unit: "$",
      },
      alert: {
        status: 'ok'
      }
    }, {
      skuid: "1212",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 34",
      price: {
        recommended: 1500,
        current: 1256,
        startrange: 1000,
        endrange: 1800,
        unit: "$",
      },
      alert: {
        status: 'warning',
        details: "This items cannot cost more than item239"
      }
    }]
  }]
}

export const edited: Prices = {
  metrics: {
    revenue: {
      current: 12000,
      unit: "$",
      projected: 14000
    },
    sales: {
      current: 3000,
      unit: "$",
      projected: 4000
    },
    margin: {
      current: 3000,
      unit: "$",
      projected: 4000
    }
  },
  stores: [{
    id: "123er",
    name: "24/7 Kansas",
    owner: "Anshuman B",
    inventory: [{
      skuid: "123",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 12",
      price: {
        recommended: 110,
        current: 110,
        startrange: 90,
        endrange: 120,
        unit: "$",
      },
      alert: {
        status: 'pending'
      }
    }, {
      skuid: "23",
      units: 200,
      category: "fast selling",
      image: "trousers.jpg",
      name: "Shirts 14",
      price: {
        recommended: 1210,
        current: 1020,
        startrange: 500,
        endrange: 1220,
        unit: "$",
      },
      alert: {
        status: 'ok'
      }
    }, {
      skuid: "890",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 87",
      price: {
        recommended: 1300,
        current: 1256,
        startrange: 1000,
        endrange: 1400,
        unit: "$",
      },
      alert: {
        status: 'ok'
      }
    }, {
      skuid: "1212",
      units: 200,
      category: "fast selling",
      image: "item1.jpg",
      name: "Shirts 34",
      price: {
        recommended: 1500,
        current: 1256,
        startrange: 1000,
        endrange: 1800,
        unit: "$",
      },
      alert: {
        status: 'warning',
        details: "This items cannot cost more than item239"
      }
    }]
  }]
}
