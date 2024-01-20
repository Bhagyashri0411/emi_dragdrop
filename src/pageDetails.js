export const pageDetails = [
    {
        "components": {
            "headercomponent": {},
            "sidebarcomponent": {},
        },
        "id": 0,
        "mainPageStyles": {
            "bgColor": "#d9d9d9",
            "color": "#000",
            "fontSize": 5,
            "margin": [0, 0],
            "padding": [0, 0]
        },
        "pageName": "Home",
        "pageLink": "/"
    }
];

export const Newheadercomponent = {
    "action": true,
    "component": "Header",
    "id": "header",
    "items": [
        {
            "styles": {
                "border": [false, false],
                "width": 8, "fontSize": 4
            },
            "img": "",
            "icon": "Home",
            "href": "/",
            "itemname": "Home",
            "id": 0,
            "type": true
        },
        {
            "styles": {
                "border": [false, false],
                "width": 8, "fontSize": 4
            },
            "img": "",
            "icon": "User",
            "href": "/about",
            "itemname": "About",
            "id": 1,
            "type": true
        }
    ],
    "logo": {
        "logoimg": "",
        "logoname": "Welcome!",
        "styles": {
            "fontSize": 18,
            "fontWeight": 500,
            "height": 5,
            "padding": [10, 10],
            "width": 8
        },
        "type": true
    },
    "styles": {
        "color": "#ffffff",
        "size": 12,
        "bgColor": "#3498db",
    }
}

export const NewSidebarcomponent = {
    "action": true,
    "component": "Sidebar",
    "id": "sidebar",
    "items": [
        {
            "icon": "Home",
            "href": "/",
            "itemname": "Home",
            "id": 0,
            "type": true,
            "subItems": [
                {
                    "icon": "User",
                    "href": "/about",
                    "itemname": "About",
                    "id": 1,
                    "type": true
                },
                {
                    "icon": "User",
                    "href": "/about",
                    "itemname": "About",
                    "id": 2,
                    "type": true
                }
            ]
        },
        {
            "icon": "User",
            "href": "/about",
            "itemname": "About",
            "id": 1,
            "type": true,
            "subItems": []
        }
    ],
    "styles": {
        "color": "#ffffff",
        "fontSize": 15,
        "gap": 5,
        "bgColor": "#3498db",
    }
}