export default async function handler(request, res) {

    const daily = [
        {
            weekNum: "1",
            timeFrame: "2",
            header: "Introduction",
            info: "Why take this course?",
            summary: "9 Videos (20 minutes total) 5 Readings"
        },
        {
            weekNum: "1",
            timeFrame: "2",
            header: "Introduction",
            info: "Why take this course?",
            summary: "9 Videos (20 minutes total) 5 Readings"
        },
        {
            weekNum: "1",
            timeFrame: "2",
            header: "Introduction",
            info: "Info",
            summary: "9 Videos (20 minutes total) 5 Readings"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(daily);
  }