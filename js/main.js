//物流数据数组，在这里增加更多物流公司
const logisticsList = [
  {
    company:"石家庄到廊坊物流公司A",
    start:"石家庄",
    end:"廊坊",
    phone:"13800138000",
    desc:"整车零担、大件运输，上门提货送货上门"
  }
];

//渲染物流列表
function renderList(list){
  const box = document.getElementById('resultBox');
  box.innerHTML = '';
  if(list.length===0){
    box.innerHTML="<p>暂无匹配物流信息</p>";
    return;
  }
  list.forEach(item=>{
    const div = document.createElement('div');
    div.className="result-item";
    div.innerHTML=`
      <h3>${item.company}</h3>
      <p>线路：${item.start} → ${item.end}</p>
      <p>联系电话：${item.phone}</p>
      <p>服务介绍：${item.desc}</p>
    `;
    box.appendChild(div);
  })
}

//搜索按钮事件
document.getElementById('searchBtn').addEventListener('click',()=>{
  const keyword = document.getElementById('searchInput').value.trim();
  if(!keyword){
    renderList(logisticsList);
    return;
  }
  const filter = logisticsList.filter(item=>{
    return item.start.includes(keyword) || item.end.includes(keyword) || item.company.includes(keyword);
  })
  renderList(filter);
})

//页面打开就展示全部物流
window.onload = function(){
  renderList(logisticsList);
}
