window.addEventListener('load', function() {
    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {
        // You have a web3 browser! Continue below!
        startApp(web3);
        console.log('Starting dApp')
    } else {
        alert("No web3 provider found please install a provider such as metamask to interact with this dApp");
    }
})

const abi = [{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newPrice","type":"uint256"}],"name":"setCurrentPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant": false,"inputs": [{"name": "_propertyID","type": "string"},{"name": "_details","type": "string"},{"name": "_propertyPrice","type":"uint256"}],"name":"createToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"viewToken","outputs":[{"name":"tokenPropertyID_","type":"string"},{"name":"tokenPropertyDetail_","type":"string"},{"name":"tokenPropertyPrice_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"createdToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]
//const contract_address = '0x862Adb061A28dF5b314Bd7753E5caCa27De94509'
const contract_address = "0x2D6803FC75bd52177Ddc2C53eEb795378f6F5E6A"


function startApp(web3) {
    const eth = new Eth(web3.currentProvider)
    //const eth = new Web3(web3.currentProvider);
    const token = eth.contract(abi).at(contract_address);
    listenForClicks(token,web3);

}

function listenForClicks (token, web3) {
    var button = document.querySelector('#propertySubmit');
    var list = document.querySelector('#listProperties');
    var form = document.querySelector('#sellProperty');
    var listTokens = [];
    var counter = 0;
    web3.eth.getAccounts(function(err, accounts) {
        address = accounts.toString();
        console.log("\""+address+"\"");
    })

    button.addEventListener('click', function() {
      var propertyID = Math.floor((Math.random() * 100) + 1).toString();
      var propertyDetails = $('#propertyDetails').val().toString();
      var propertyPrice = $('#propertyPrice').val();
      token.createToken(propertyID, propertyDetails, propertyPrice, {from: address}).then(function (txHash) {
        alert('Transaction ' + txHash + ' sent succesfully!');
      }).catch(console.error);
    })

    list.addEventListener('click', function() {
      $('#listProperty').html('')
      token.myTokens({from: address}).then(function (txHash) {
        txHash[0].forEach((item, index) => {
          tokenId = item.toString();
          counter++;
          token.viewToken(tokenId, {from: address}).then(function (txHash2) {
            listTokens.push({propId: txHash2['tokenPropertyID_'], propDetail: txHash2['tokenPropertyDetail_'], propPrice: web3.toDecimal(txHash2['tokenPropertyPrice_'])});
            counter--;
            if(counter == 0){
              while(listTokens.length > 0){
                propertyCards(listTokens.splice(0,3));
              }
            }
          }).catch("error retrieving object: "+console.error);
        });
        $('.mainContainer').width("auto");
        $('#formProperty').hide();
        $('#listProperty').show();
      })
    });

    form.addEventListener('click', function() {
      $('#listProperty').html('').hide();
      $('.mainContainer').width("600px");
      $('#formProperty').show();
    });
}

function propertyCards(tokens){
  let str = '<div class="row" style="margin-bottom: 10px;">'
  let htmlBody = $('#listProperty').html()
  tokens.forEach(function(element) {
    str = str + '<div class="col-sm">'
            + '<div class="card" style="width: 18rem;">'
            + '<img src="https://picsum.photos/320/240" class="card-img-top" alt="...">'
            + '<div class="card-body">'
            + '<h5 class="card-title">'+ element.propDetail +'</h5>'
            + '<p class="card-text">'+ element.propPrice +'</p>'
            + '</div>'
            + "</div>"
            + "</div>";
  });
  str = str + '</div>'
  htmlBody = htmlBody + str
  $('#listProperty').html(htmlBody);
}
