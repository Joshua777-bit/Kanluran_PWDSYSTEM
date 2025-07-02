import {signupobjects, latesttblobjects, incomingtblobjects, previoustblobjects, benefitsobjects, accountsobjects, activitylogobjects} from './data.js';
import {signuptableFiller,filterContent, getFilter, bnftfilterFiller, statustableFiller, tableFiller, panelFiller, centersFiller, connectionStatus, containerManipulation, dashboardContents} from './classes.js';

// Dashboard elements
const benefitsTrack = document.getElementById('benefitsTrack');
const accountsTrack = document.getElementById('accountsTrack');
const imparementsTrack = document.getElementById('imparementsTrack');

// Table IDs
const latesttbl = "latesttbl";
const incomingtbl = "incomingtbl";
const previoustbl = "previoustbl";

// Modal items
const recipientName = document.querySelector("#bnftmodalrecipient_name");
const recipientImg = document.querySelector("#bnftmodalrecipient_pic");
const recipientID = document.querySelector("#bnftmodalrecipient_id");
const recipientDisabilitytype = document.querySelector("#bnftmodalrecipient_disabilitytype");
const recipientAddress = document.querySelector("#bnftmodalrecipient_address");
const recipientContactno = document.querySelector("#bnftmodalrecipient_contactno");
const recipientBirthday = document.querySelector("#bnftmodalrecipient_birthday");
const recipientMembersince = document.querySelector("#bnftmodalrecipient_membersince");
const recipientTransactionno = document.querySelector("#bnftmodalrecipient_benefittransactionno");
const recipientDateofclaim = document.querySelector("#bnftmodalrecipient_benefitdateofclaim");
const recipientTransactiontype = document.querySelector("#bnftmodalrecipient_benefittransactiontype");
const recipientBenefitname = document.querySelector("#bnftmodalrecipient_benefitname");
const recipientAmount = document.querySelector("#bnftmodalrecipient_benefitamount");
const bnftModal = document.querySelector(".bnftModal");
const bnftModalexit = document.querySelectorAll(".bnftModalexit");

const modalItems = [
  recipientName, recipientImg, recipientID, recipientDisabilitytype,
  recipientAddress, recipientContactno, recipientBirthday, recipientMembersince,
  recipientTransactionno, recipientDateofclaim, recipientTransactiontype,
  recipientBenefitname, recipientAmount
];

// Fill tables first
new statustableFiller(latesttbl, latesttblobjects);
new statustableFiller(incomingtbl, incomingtblobjects);
new statustableFiller(previoustbl, previoustblobjects);




let latestbnftRows = document.querySelectorAll("#latesttbl tbody tr");
let incomingbnftRows = document.querySelectorAll("#incomingtbl tbody tr");
let previousbnftRows = document.querySelectorAll("#previoustbl tbody tr");
// Wait for DOM to update (next tick)
setTimeout(() => {
  
 

  new panelFiller(latestbnftRows, modalItems, bnftModal, bnftModalexit).attachEvents();
  new panelFiller(incomingbnftRows, modalItems, bnftModal, bnftModalexit).attachEvents();
  new panelFiller(previousbnftRows, modalItems, bnftModal, bnftModalexit).attachEvents();
}, 0);



// Scheduling modals
const schedulingModal = document.querySelector(".schedulingModal");
const schedulingModalexit = document.querySelectorAll(".schedulingModalexit");
const schedulingModalbtn = document.querySelector('.schedulingModalbtn');
const personalizedSchedulingbtn = document.querySelector('.personalizedSchedulingbtn');
const centralizedSchedulingbtn = document.querySelector(".centralizedSchedulingbtn");

const centralizedScheduling = document.querySelector(".centralizedScheduling");
const schedulingCentralizedBtn = document.querySelector(".centralizedSchedulingbtn");
const personalizedScheduling = document.querySelector(".personalizedScheduling");
const schedulingPersonalizedBtn = document.querySelector(".personalizedSchedulingbtn");

const schedulingContainerMnpl = new containerManipulation(schedulingModal, schedulingModalexit, schedulingModalbtn);
schedulingContainerMnpl.attachEvents();

schedulingCentralizedBtn.addEventListener("click", () => {
  schedulingContainerMnpl.togglesecondarycontainerShow(
    centralizedScheduling, centralizedSchedulingbtn,
    personalizedScheduling, personalizedSchedulingbtn
  );
});
schedulingPersonalizedBtn.addEventListener("click", () => {
  schedulingContainerMnpl.togglesecondarycontainerShow(
    personalizedScheduling, personalizedSchedulingbtn,
    centralizedScheduling, centralizedSchedulingbtn
  );
});

// Rescheduling
const reschedulingModal = document.querySelector(".reschedulingModal");
const reschedulingModalexit = document.querySelectorAll(".reschedulingModalexit");
const reschedulingModalbtn = document.querySelector('.reschedulingModalbtn');
new containerManipulation(reschedulingModal, reschedulingModalexit, reschedulingModalbtn).attachEvents();

// Edit Account
const editaccountModal = document.querySelector(".editaccountModal");
const editaccountModalexit = document.querySelectorAll(".editaccountModalexit");
const editaccountModaltn = document.querySelector(".editaccountModalbtn");
new containerManipulation(editaccountModal, editaccountModalexit, editaccountModaltn).attachEvents();

// Edit Benefit
const editbenefitContainerexit = document.querySelectorAll('.editbenefitModalexit');
const editbenefitContainer = document.querySelector('.editbenefitModal');
const editbenefitBtn = document.querySelector(".editbenefitBtn");
new containerManipulation(editbenefitContainer, editbenefitContainerexit, editbenefitBtn).attachEvents();

// Dashboard
new dashboardContents(benefitsTrack, accountsTrack, imparementsTrack);

//Benefit Center
const bnftCentercontainer= document.querySelector("#benefitlistContainer");
const bnftsubdivClassname = "bnftpanelsubDiv";
const bnftbenefit_name = "benefit_name";
new centersFiller(bnftCentercontainer, benefitsobjects, bnftsubdivClassname, bnftbenefit_name);





//Benefit Center Panel Fill
const benefitName = document.querySelector("#bnftcenterPanelbenefit_name");
const benefitPic = document.querySelector("#bnftcenterPanelbenefit_pic");
const benefitType = document.querySelector("#bnftcenterPanelbenefit_type");
const benefitDateadded = document.querySelector("#bnftcenterPanelbenefit_dateadded");
const benefitAmount = document.querySelector("#bnftcenterPanelbenefit_amount");
const benefitTotalbeneficiaries = document.querySelector("#bnftcenterPanelbenefit_totalbeneficiaries");
const benefitzavallabeneficiaries = document.querySelector("#bnftcenterPanelbenefit_zavallabeneficiaries");
const benefitarambulobeneficiaries = document.querySelector("#bnftcenterPanelbenefit_arambulobeneficiaries");
const benefitanonuevobeneficiaries = document.querySelector("#bnftcenterPanelbenefit_anonuevobeneficiaries");
const benefitrizalbeneficiaries = document.querySelector("#bnftcenterPanelbenefit_rizalbeneficiaries");
const benefitfgomezbeneficiaries = document.querySelector("#bnftcenterPanelbenefit_fgomezbeneficiaries");
const benefitlucerobeneficiaries = document.querySelector("#bnftcenterPanelbenefit_lucerobeneficiaries");
const benefitdrzavallabeneficiaries = document.querySelector("#bnftcenterPanelbenefit_drzavallabeneficiaries");
const benefitpvallejobeneficiaries = document.querySelector("#bnftcenterPanelbenefit_pvallejobeneficiaries");

const bnftpanelItems = [benefitName,
  benefitPic, benefitType,
  benefitDateadded, benefitAmount,
  benefitTotalbeneficiaries,
  benefitzavallabeneficiaries,
  benefitarambulobeneficiaries,
  benefitanonuevobeneficiaries,
  benefitrizalbeneficiaries,
  benefitfgomezbeneficiaries,
  benefitlucerobeneficiaries,
  benefitdrzavallabeneficiaries,
  benefitpvallejobeneficiaries];

setTimeout(()=>{
  const bnftDatas = document.querySelectorAll(".bnftpanelsubDiv");
  new panelFiller(bnftDatas, bnftpanelItems, null, null).attachEvents();
}, 0);

const accCentercontainer = document.querySelector("#accountlistContainer");
const accsubdivClassname = "accountpanelsubDiv";
const account_name = "account_name";
new centersFiller(accCentercontainer, accountsobjects, accsubdivClassname, account_name);

const accountName = document.querySelector("#accountcenterPanelaccount_name");
const accountPic = document.querySelector("#accountcenterPanelaccount_pic");
const accountID = document.querySelector("#accountcenterPanelaccount_id");
const accountDisabilitytype = document.querySelector("#accountcenterPanelaccount_disabilitytype");
const accountPosition= document.querySelector("#accountcenterPanelaccount_position");
const accountMembersince = document.querySelector("#accountcenterPanelaccount_membersince");
const accountGender = document.querySelector("#accountcenterPanelaccount_gender");
const accountBirthday= document.querySelector("#accountcenterPanelaccount_dateofbirth");
const accountAddress = document.querySelector("#accountcenterPanelaccount_address");

const accpanelItems = [accountName,
  accountPic, 
  accountID, 
  accountDisabilitytype, 
  accountPosition, 
  accountMembersince, 
  accountGender, 
  accountBirthday, 
  accountAddress];

setTimeout(()=>{
  const accountDatas = document.querySelectorAll(".accountpanelsubDiv");
  new panelFiller(accountDatas, accpanelItems, null, null).attachEvents();
}, 0);

//Sign up Table
const activitylogtable = "activitylogtable";
new tableFiller(activitylogtable, activitylogobjects);

const signuptbl = "signuptbl";
new signuptableFiller(signuptbl, signupobjects);





// Connection check
new connectionStatus();

const navModal = document.querySelector("#navModal");
const navModalexit = document.querySelectorAll(".navModalexit");
const navBtn = document.querySelector("#navBtn");

new containerManipulation(navModal, navModalexit, navBtn).attachEvents();

const bybnftName = "bybnftName";
const latesttblFilter = document.querySelector(".latesttblfilterbnftContainer");
new bnftfilterFiller(latesttblFilter, bybnftName);

const incomingtblFilter = document.querySelector(".incomingtblfilterbnftContainer");
new bnftfilterFiller(incomingtblFilter,  bybnftName);

const previoustblFilter = document.querySelector(".previoustblbnftfilterContainer");
new bnftfilterFiller(previoustblFilter,  bybnftName);

const latestbnftfilterpanel = document.querySelector(".latestbnftfilterPanel");
const latesttblfiltersubContainers = latestbnftfilterpanel.querySelectorAll(".filtervalueContainer");

const incomingbnftfilterpanel = document.querySelector(".incomingbnftfilterPanel");
const incomingtblfiltersubContainers = incomingbnftfilterpanel.querySelectorAll(".filtervalueContainer");

const previousbnftfilterpanel = document.querySelector(".previousbnftfilterPanel");
const previoustblfiltersubContainers = previousbnftfilterpanel.querySelectorAll(".filtervalueContainer");

new filterContent(latestbnftRows, latesttblfiltersubContainers);
new filterContent(incomingbnftRows, incomingtblfiltersubContainers);
new filterContent(previousbnftRows, previoustblfiltersubContainers);

const latestfilterBtn = document.querySelector("#latestfilterBtn");
const incomingfilterBtn = document.querySelector("#incomingfilterBtn");
const previousfilterBtn = document.querySelector("#previousfilterBtn");

const latestfilterexit = latestbnftfilterpanel.querySelectorAll(".filtermodalExit");
const incomingfilterexit = incomingbnftfilterpanel.querySelectorAll(".filtermodalExit");
const previousfilterexit = previousbnftfilterpanel.querySelectorAll(".filtermodalExit");

new containerManipulation(latestbnftfilterpanel, latestfilterexit, latestfilterBtn).attachEvents();
new containerManipulation(incomingbnftfilterpanel, incomingfilterexit, incomingfilterBtn).attachEvents();
new containerManipulation(previousbnftfilterpanel, previousfilterexit, previousfilterBtn).attachEvents();




