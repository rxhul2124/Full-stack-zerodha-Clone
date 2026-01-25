export const  ChargesForOpening = {
    name:"Charges for account opening",
    tableHeads:[
        "Type of account",
        "Charges"
    ],
    rows:[
        {
            label:"Online account",
            values:[
                "FREE",
            ]
        },
        {
            label:"Offline account",
            values:[
                "FREE"
            ]
        },
        {
            label:"NRI account(offline only)",
            values:["500"]
        },
        {
            label:"Partnership, LLP, HUF, or Corporate accounts (offline only)",
            values:["500"]
        },

    ]
}


export const  DematAMC = {
    name:"Demat AMC (Annual Maintenance Charge)",
    tableHeads:[
        "Value of holdings",
        "AMC"
    ],
    rows:[
        {
            label:"Up to ₹4 lakh",
            values:["FREE"]
        },
        {
            label:"₹4 lakh - ₹10 lakh",
            values:["₹ 100 per year, charged quarterly*"]
        },
        {
            label:"Above ₹10 lakh",
            values:["₹ 300 per year, charged quarterly"]
        },
        
    ]
}

export const OptionalServices = {
    name:"Charges for optional value added services",
    tableHeads:[
        "Service",
        "Billing Frquency",
        "Charges"
    ],
    rows:[
        {
            label:"Tickertape",
            values:[
                "Monthly / Annual",
                "Free: 0 | Pro: 249/2399"
            ]
        },
        {
            label:"Smallcase",
            values:[
                "Per transaction",
                "Buy & Invest More: 100 | SIP: 10"
            ]
        },{
            label:"Kite Connect",
            values:[
                "Monthly",
                "Connect: 500 | Personal: Free"
            ]
        },
    ]
}
