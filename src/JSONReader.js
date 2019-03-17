export default class JSONReader{
    
    resultSet = []
    next = '';
    
    statCategory = 'Air Conditioners'
    cubicWeightCovFactor = 250
    totalCubicWeight = 0
    
    
    constructor(initUrl){
        this.initUrl = initUrl
    }
    
    // Combine all relevant data from diffrent pages and calculate the avg. weight
    readPaginatedJSON(){
        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        var currentUrl = getLocation(this.initUrl)
        var baseUrl = 'http://'+currentUrl.hostname
        var endPage = false;

        // Parse all pages JSON Data
        while (! endPage){
            const data = this.getJSON(currentUrl)
            data.objects.forEach(element => {
                if (element.size.width && element.category === this.statCategory){
                    const {width, height, length} = element.size
                    this.resultSet.push(element)
                    this.totalCubicWeight += (width * height * length)/(Math.pow(100,3)) * this.cubicWeightCovFactor
                    console.log(this.totalCubicWeight)
                }
            })
            if (data.next && data.next !== ''){
                currentUrl = baseUrl + data.next
            } else {
                endPage = true;
            }
        }

        return {'itemList':this.resultSet, 'avgWeight': (this.totalCubicWeight/this.resultSet.length).toFixed(2)}
    }

    // Get JSON data for each page
    getJSON(url){
        var proxyurl = "http://localhost:3000/"
        var req = new XMLHttpRequest()
        var obj_A
        req.open('GET', proxyurl+url, false)
        req.send()
        if (req.status === 200) {
            obj_A = req.responseText;
          }
        
        return JSON.parse(obj_A)
    }

    
}