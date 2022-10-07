const $data = document.querySelector(".data");
let data = {
    "data": [        
        {
            "date": "9월 25일",
            "high_temp": "25.2℃",
            "low_temp": "15.4℃",
            "weather": "맑음"
        },
        {
            "date": "9월 26일",
            "high_temp": "25.4℃",
            "low_temp": "14.8℃",
            "weather": "맑음"
        },
        {
            "date": "9월 27일",
            "high_temp": "28.0℃",
            "low_temp": "14.0℃",
            "weather": "맑음"
        },
        {
            "date": "9월 28일",
            "high_temp": "26.1℃",
            "low_temp": "16.1℃",
            "weather": "맑음"
        },
        {
            "date": "9월 29일",
            "high_temp": "26.5℃",
            "low_temp": "16.4℃",
            "weather": "맑음"
        },
        {
            "date": "9월 30일",
            "high_temp": "27.7℃",
            "low_temp": "14.8℃",
            "weather": "맑음"
        },
        {
            "date": "10월 1일",
            "high_temp": "27.6℃",
            "low_temp": "14.4℃",
            "weather": "맑음"
        }
    ] 
}


$data.textContent = JSON.stringify(data);