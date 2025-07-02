import Chart from 'chart.js/auto';
import { benefitsobjects } from './data';



class objectsdissector{
  constructor(objectstoDissect){
    this.dataobjects = objectstoDissect;
    this.dissectObject();
  }

  dissectObject(){
    this.objectsArray = Object.values(this.dataobjects);
    this.dataArray = this.objectsArray.map(array=>Object.entries(array));
  }
}

export class tableFiller extends objectsdissector{
  constructor(tabletoFill, objectstoInsert){
    super(objectstoInsert);
    this.tabletoFill = tabletoFill;
    this.createRow();

  }

  createRow(){
    this.dataArray.forEach(array => {
      let row = document.createElement("tr");
      row.className = "border-b-1 border-b-slate-900 h-10 grow-0";
      array.forEach(([key, value])=>{
        row.dataset[key] = value;
      })
      this.createCell(row);
      this.fillTable(row);
    })

  }

  createCell(rowNode){
    const activitylog_name = document.createElement("td");
    const activitylog_type = document.createElement("td");
    const activitylog_dateandtime = document.createElement("td");
    const activitylog_activity = document.createElement("td");
    
    activitylog_name.textContent = rowNode.dataset.activitylog_name;
    activitylog_type.textContent = rowNode.dataset.activitylog_type;
    activitylog_dateandtime.textContent = rowNode.dataset.activitylog_dateandtime;
    activitylog_activity.textContent = rowNode.dataset.activitylog_activity;

    rowNode.appendChild(activitylog_name);
    rowNode.appendChild(activitylog_type);
    rowNode.appendChild(activitylog_dateandtime);
    rowNode.appendChild(activitylog_activity);

  }

  fillTable(rowNode){
    const table = document.querySelector(`#${this.tabletoFill} tbody`);
    table.appendChild(rowNode);
  }


}

export class statustableFiller extends tableFiller {
    constructor(tabletoFill, objectstoInsert) {
      super(tabletoFill, objectstoInsert);
    }

    createRow() {
      this.dataArray.forEach(array => {
        let row = document.createElement("tr");
        row.className = "group active:bg-slate-800 active:text-slate-100 text-center hover:h-15 border-b-[0.5px] border-slate-950/30 hover:bg-slate-900 hover:text-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12";
        array.forEach(([key, value]) => {
          if (typeof value !== "object") {
            row.dataset[key] = value;
          }

          if (typeof value === "object") {
            Object.entries(value).forEach(([subKey, subVal]) => {
              row.dataset[subKey] = subVal;
            });
          }
        });

        this.createCell(row);
      });
    }

    createCell(rowNode) {
      let icon = "";
      const statusicon = () => {
        if(rowNode.dataset.recipient_benefitstatus){
          if (rowNode.dataset.recipient_benefitstatus === "Available"){
            icon = "hidden group-active:bg-slate-900 md:inline mask-[url('../resources/circle.svg')] mask-contain bg-slate-100 group-hover:bg-slate-900 size-4 mask-no-repeat" ;
            return icon;
          }
          if(rowNode.dataset.recipient_benefitstatus === "Unavailable"){
            icon = "hidden group-active:bg-slate-900 md:inline  mask-[url('../resources/x-mark.svg')] mask-contain bg-slate-100 group-hover:bg-slate-900 size-6 mask-no-repeat" ;
            return icon;
          }
          if(rowNode.dataset.recipient_benefitstatus === "Delayed"){
            icon = "hidden group-active:bg-slate-900 md:inline mask-[url('../resources/clock.svg')] mask-contain bg-slate-100 group-hover:bg-slate-900 size-6 mask-no-repeat" ;
            return icon;
          }
          if(rowNode.dataset.recipient_benefitstatus === "Claimed"){
            icon= "hidden md:inline group-active:bg-slate-900 mask-[url('../resources/check.svg')] mask-contain bg-slate-100 group-hover:bg-slate-900 size-6 mask-no-repeat" ;
            return icon;
          }
          if(rowNode.dataset.recipient_benefitstatus === "Unclaimed"){
            icon = "hidden md:inline group-active:bg-slate-900 mask-[url('../resources/exclamation-triangle.svg')]  mask-contain bg-slate-100 group-hover:bg-slate-900 size-6 mask-no-repeat" ;
            return icon;
          }

        }
      }
      
      const createCell = (text, extraClass = "") => {
        const td = document.createElement("td");
        if(text.toLowerCase() === rowNode.dataset.recipient_benefitstatus.toLowerCase()){
          const div = document.createElement("div");
          div.className = "inline-flex py-0.5 group-active:bg-slate-100 group-active:text-slate-900 px-2 mt-1 group-hover:text-slate-900 rounded-4xl group-hover:bg-slate-100 group-hover:text-slate-100 bg-slate-900 text-slate-100 items-center justify-center gap-1";
          const subdiv = document.createElement("div");
          subdiv.className = statusicon();
          const p = document.createElement("p");
          p.textContent = text;
        
          
          div.appendChild(subdiv);
          div.appendChild(p);
          
          td.appendChild(div);
          if (extraClass){
            td.className = extraClass;
            return td;
          }
          return td;
        }else{
          td.textContent = text;
          if (extraClass){
            td.className = extraClass;
            return td;
          }
          return td;
        }
      };
      
      const cells = [
        createCell(rowNode.dataset.recipient_benefittransactionno, "hidden md:table-cell"),
        createCell(rowNode.dataset.recipient_name),
        createCell(rowNode.dataset.recipient_id, "hidden md:table-cell"),
        createCell(rowNode.dataset.recipient_benefitname),
        createCell(rowNode.dataset.recipient_benefitdateofclaim),
        createCell(rowNode.dataset.recipient_benefitstatus)
      ];

      cells.forEach(cell=>{
        rowNode.appendChild(cell);
      })

      this.fillTable(rowNode);
    }

}

export class signuptableFiller extends tableFiller{
  constructor(tabletoFill, objectstoInsert) {
    super(tabletoFill, objectstoInsert);
  }

  createRow(){
    this.dataArray.forEach(array=>{
      const row = document.createElement("tr");
      row.className = "group active:bg-slate-800 active:text-slate-100 text-center hover:h-15 border-b-[0.5px] border-slate-950/30 hover:bg-slate-900 hover:text-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12";
      array.forEach(([key, value])=>{
        row.dataset[key] = value;
      })
      this.createCell(row);
      this.fillTable(row);
    })
  }

  createCell(rowNode){
    const signupaccount_name = document.createElement("td");
    const signupaccount_id = document.createElement("td");
    const signupaccount_disabilitytype = document.createElement("td");
    const signupaccount_accounttype = document.createElement("td");
    const signupaccount_signupdate = document.createElement("td");
    const signupaccount_actions = document.createElement("td");

    signupaccount_name.textContent = rowNode.dataset.account_name;
    signupaccount_id.textContent = rowNode.dataset.account_id;
    signupaccount_id.className = "hidden md:table-cell";
    signupaccount_disabilitytype.textContent = rowNode.dataset.account_disabilitytype;
    signupaccount_accounttype.textContent = rowNode.dataset.account_accounttype;
    signupaccount_signupdate.textContent = rowNode.dataset.account_signupdate;
    signupaccount_actions.className = "flex justify-center h-10 items-center group-hover:h-15";

    const actionDiv = document.createElement("div");
    actionDiv.className = "flex h-7 justify-center w-2 gap-2";

    const approveBtn = document.createElement("button");
    const approveIcon = document.createElement("div");
    approveBtn.className = "bg-slate-900 px-2 rounded-2xl group-hover:bg-slate-200";
    approveIcon.className = "mask-no-repeat shrink-0  mask-[url('../resources/check.svg')] group-hover:bg-slate-900  mask-contain size-4 md:size-6 lg:size-7 xl:size-5 bg-slate-100";
    approveBtn.appendChild(approveIcon);

    const denyBtn = document.createElement("button");
    const denyIcon = document.createElement("div");
    denyBtn.className = "bg-slate-200 px-2 rounded-2xl group-hover:bg-slate-300";
    denyIcon.className = "mask-no-repeat shrink-0 mask-[url('../resources/x-mark.svg')]  mask-contain group-hover:bg-slate-900  size-4 md:size-6 lg:size-7  xl:size-5 bg-slate-900";
    denyBtn.appendChild(denyIcon);

    actionDiv.appendChild(approveBtn);
    actionDiv.appendChild(denyBtn);

    signupaccount_actions.appendChild(actionDiv);
    rowNode.appendChild(signupaccount_name);
    rowNode.appendChild(signupaccount_id);
    rowNode.appendChild(signupaccount_disabilitytype);
    rowNode.appendChild(signupaccount_accounttype);
    rowNode.appendChild(signupaccount_signupdate);
    rowNode.appendChild(signupaccount_actions);
  }
}

export class centersFiller extends objectsdissector{
  constructor(containertoFill, objectstoInsert, subdivClassname, center_name){
    super(objectstoInsert);
    this.containertoFill = containertoFill;
    this.subdivClassname = subdivClassname;
    this.center_name = center_name;
    this.createsubDiv();
  }

  createsubDiv(){
    this.dataArray.forEach(array => {
      let divsubContainer = document.createElement("div");
      array.forEach(([key,value])=> {
        divsubContainer.dataset[key] = value;
        this.createsubDivchild(key, value, divsubContainer);
        divsubContainer.className = this.subdivClassname;
      });
      this.fillContainer(divsubContainer);
    })
  }

  createsubDivchild(key,value, subContainer){
    if(key === this.center_name){
      const p = document.createElement("p");
      p.textContent = value;
      p.className = "pr-2 md:pr-5 flex items-center justify-end border-b-[1px] border-b-slate-900 h-10 hover:h-15 hover:bg-slate-900 hover:text-slate-100 active:bg-slate-800 active:text-slate-100";
      subContainer.appendChild(p);
    }
  }

  fillContainer(subContainer){
    this.containertoFill.appendChild(subContainer);
  }

}

export class connectionStatus{
    constructor(){
      window.addEventListener("DOMContentLoaded", ()=> {
        window.addEventListener("offline", this.offlineconnectionStatus.bind(this));
        window.addEventListener("online", this.onlineconnectionStatus.bind(this));
      })
    }

    offlineconnectionStatus(){
      const notificatioSound = document.getElementById("notificationSound");
      notificatioSound.currentTime = 1;
      notificatioSound.volume = 0.5;
      notificatioSound.play();
      
      const onlineContainer = document.querySelector("#onlineContainer");
      onlineContainer.classList.replace('flex','hidden');

      const offlineContainer = document.querySelector("#offlineContainer");
      offlineContainer.classList.replace('hidden', 'flex');
    }

    onlineconnectionStatus(){
      const offlineContainer = document.querySelector("#offlineContainer");
      
      offlineContainer.classList.replace('flex','hidden');
      
      const notificatioSound = document.getElementById("notificationSound");
      notificatioSound.currentTime = 1;
      notificatioSound.volume = 0.5;
      notificatioSound.play();
      const onlineContainer = document.querySelector("#onlineContainer");
      onlineContainer.classList.replace('hidden','flex');
      setTimeout(()=>{
          onlineContainer.classList.replace('flex','hidden');
      }, 5000);
    }

}

export class containerManipulation{
    constructor(modal, modalexit, modalbtn){
        this.modal = modal;
        this.modalexit = modalexit;
        this.modalbtn = modalbtn;
    }
      unablescroll(){
      const body = document.querySelector("body");
      body.classList.add("h-screen");
      body.classList.add("overflow-hidden");
    }
    
    enablescroll(){
      const body = document.querySelector("body");
      body.classList.remove("h-screen");
      body.classList.remove("overflow-hidden");
    }

    attachEvents() {
        if (this.modalbtn) { // Check if the button actually exists
            this.modalbtn.addEventListener("click", this.containerShow.bind(this));
        }
        if (this.modalexit && typeof this.modalexit.forEach === 'function') { 
            this.modalexit.forEach(exit => exit.addEventListener('click', this.containerHide.bind(this)));
        }
       
    }

    containerShow(){
        this.modal.classList.replace("hidden", "flex");
        this.modalexit[1].classList.replace("hidden","flex");
        this.unablescroll();
    }

    containerHide(){
        this.modal.classList.replace("flex", "hidden");
        this.modalexit[1].classList.replace("flex", "hidden");
        this.enablescroll();

    }

    togglesecondarycontainerShow(firstsecondaryModal, firstsecondaryModalbtn, secondsecondaryModal, secondsecondaryModalbtn){

        secondsecondaryModalbtn.classList.replace("text-slate-100", "text-slate-900");
        secondsecondaryModalbtn.classList.remove("bg-slate-900");

        firstsecondaryModalbtn.classList.replace("text-slate-900", "text-slate-100");
        firstsecondaryModalbtn.classList.add("bg-slate-900");
        
        secondsecondaryModal.classList.replace("flex", "hidden");
        firstsecondaryModal.classList.replace("hidden", "flex");
    }


}

export class panelFiller extends containerManipulation{
    constructor(rowsCollection, elementstoFill, modalContainer, modalContainerexit){
      super(modalContainer, modalContainerexit, null);
      this.modalContainer = modalContainer;
      this.modalContainerexit = modalContainerexit;
      this.rowsCollection = rowsCollection;
      this.elementstoFill = elementstoFill;
    }

    attachEvents(){
      this.rowclickFinder();
      if (this.modalContainerexit != null){
          this.modalContainerexit.forEach(exit=>{
          exit.addEventListener("click",this.containerHide.bind(this))
        
      })
      }
    }
    
  

    rowclickFinder(){
  
      this.rowsCollection.forEach(row =>{
        row.addEventListener('click', ()=> {
          this.fillContainer(row);
          this.changeAction(row);
          if(this.modalContainer !== null){
            this.containerShow();
          }
          
        })
      })
    }


    changeAction(row){
      const claimBtn = document.querySelector("#bnftmodalrecipient_benefitclaimaction");
      if(claimBtn){
        if( row.dataset.recipient_benefitstatus !== "Unavailable" && row.dataset.recipient_benefitstatus !== "Claimed"){
          claimBtn.classList.remove("hidden");
          this.modalContainerexit[1].classList.remove("ml-auto");
        }else{
          claimBtn.classList.add("hidden"); 
          this.modalContainerexit[1].classList.add("ml-auto");
        }
      }
    
    }

    fillContainer(rowData){
      Object.entries(rowData.dataset).forEach(([key, value])=> {
        let regex = new RegExp(key, "i");
        for(let i = 0; i < this.elementstoFill.length; i++){
          let element = this.elementstoFill[i];
          if(element.id && regex.test(element.id)){
            if(element.tagName.toLowerCase() !== "img"){
                element.textContent = value;
            }else{
              element.src = value;
              element.classList.add("object-cover");
            }
          }
        }
      })
    }
}

export class dashboardContents{
    constructor(benefitsTrack, accountsTrack, imparementsTrack){
      this.benefitsTrack = benefitsTrack;
      this.accountsTrack = accountsTrack;
      this.imparementsTrack = imparementsTrack;

      this.attachEvents();
    }

    attachEvents(){
      this.benefitstrackRender();
      this.accountstrackRender();
      this.imparementstrackRender();
    }

    benefitstrackRender(){
      new Chart(this.imparementsTrack, {
        type: 'doughnut', // or 'line', 'pie', 'doughnut', etc.
        data: {
          labels: ['Visual Imparement', 'Speech and Language Imparement', 'Mobility Impared', 'Psychological Imparement', 'Cognitive Imparement', 'Hearing Imparement', 'Neurological Imparement'],
          datasets: [{
            label: 'Imparements Track',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: [
              'rgba(15, 23, 42, 1)',
              'rgba(71, 85, 105, 1)',
              'rgba(100, 116, 139, 1)',
              'rgba(148, 163, 184, 1)',
              'rgba(203, 213, 225, 1)',
              '	rgba(226, 232, 240, 1)',
              'rgba(203, 213, 225, 1)',
            ],
            pointRadius: 5,
            
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          },

        }
      });
    }

    accountstrackRender(){
      new Chart(this.accountsTrack, {
        type: 'line', // or 'line', 'pie', 'doughnut', etc.
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
          datasets: [{
            label: 'Accounts Creation',
            data: [12, 19, 3, 5, 2, 3, 7,9, 14, 5, 34, 12],
            backgroundColor: [
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)'
            ],
            pointRadius: 5,
            
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    }
    imparementstrackRender(){
      new Chart(this.benefitsTrack, {
        type: 'bar', // or 'line', 'pie', 'doughnut', etc.
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
          datasets: [{
            label: 'Benefits Distribution',
            data: [12, 19, 3, 5, 2, 3, 7,9, 14, 5, 34, 12],
            backgroundColor: [
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)',
              'rgba(15, 23, 42, 1)'
            ],
            
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
}

export class getFilter{
  constructor(filtersCollection){
    this.filtervalues = new Map();
    this.filtersCollection = filtersCollection;
    this.getClick();
  }

  getfilter(filter){
    const filtervalue = filter.dataset.filtervalue;
    const filterType =  filter.dataset.filterType;
    const filtertoReturn = [[filterType, filtervalue]];
    return filtertoReturn;
  }


  filterData(){
    throw new Error("Filter Data must be Overriden");
  }


  getClick() {
    this.filtersCollection.forEach(filter => {

      filter.addEventListener("click",()=>{
        const filterVal = filter.dataset.filtervalue;
        const filterType = filter.dataset.filterType;
        
        const tempHoldfilterval = Array.from(this.filtervalues.values());
        let everyfilterAll = tempHoldfilterval.every(val => val === "All");
        
        if(everyfilterAll && this.filtervalues.size!==0){
          console.log("everyfilter all filtervalues not zerto");
          this.filterData();
        }  
        else if(filterVal === "All"){
          this.filtervalues.delete(filterType);
          this.filterData();
        }else{
          this.filtervalues.set(filterType, filterVal);
          this.filterData();
        }


      })
    });
  }
}

export class filterContent extends getFilter{
  constructor(datatoFilter, filters){
    super(filters);
    this.datatoFilter = datatoFilter;
  }

  filterData(){
    console.log("datatofilter: " + this.datatoFilter);
    console.log("filter values: " + this.filtervalues);

    this.datatoFilter.forEach(row=>{
      const rowdataset = Object.values(row.dataset);
      let hasvalallMatch = false;
      

      for(const val of this.filtervalues.values()){
      
        if(rowdataset.includes(val)){
          hasvalallMatch = true;
        }else{
          hasvalallMatch = false;
          break;
        }
      }

      const isHidden = row.classList.contains("hidden");

      if(this.filtervalues.size !== 0){
          if(hasvalallMatch){
            row.classList.remove("hidden");
          }else if(!hasvalallMatch && !isHidden){
            row.classList.add("hidden");
          }

      }else{
        row.classList.remove("hidden");
      }
  
    })
  }

  
}


export class bnftfilterFiller extends objectsdissector{
  constructor(filterContainer, filtercatName){
    super(benefitsobjects);
    this.filterContainer = filterContainer;
    this.filtercatName = filtercatName;
    this.filterstoInsert = [];
  
    this.createsubDiv();
  }

  getbenefitName(){
    this.dataArray.forEach(array => {
      this.filterstoInsert.push(array[0][1]);
    })
  }

  createsubDiv(){
    this.getbenefitName();
    this.filterstoInsert.forEach(filter => {
      const subDiv = document.createElement("div");
      subDiv.className = "border-b-[1px]  filtervalueContainer py-2 pl-1.5 pr-3 hover:bg-slate-900 hover:text-slate-100  border-slate-900";
      subDiv.dataset.filtervalue = filter;
      subDiv.dataset.filterType = this.filtercatName;
      const p = document.createElement("p");
      p.textContent = filter;
      subDiv.appendChild(p);
      this.filterContainer.appendChild(subDiv);
    })
  }
  fillContainer(subDiv){
    this.filterContainer.appendChild(subDiv);
  }


}




    


