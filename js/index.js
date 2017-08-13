$(document).ready(function(){
  var pathEls = document.querySelectorAll('path');
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 3000),
      delay: anime.random(0, 2000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }
});

function load(){
  AOS.init();
  setTimeout(function(){
    $(".startup").css("position", "absolute");
    $(".startup-message").html("");
    document.getElementsByClassName("startup")[0].style.animationName = "curtain";
    $("body").css("overflow", "auto");
  }, 2000);
  $(".data li:eq(0)").addClass("Active");
  $(".os li:eq(0)").addClass("Active");
}

var type="";
function showData(type)
{
  if(type === 'Desktop')
  {
    $(".data li").removeClass("Active");
    $(".data li:eq(0)").addClass("Active");
    $("#show-data").html("Desktop Drives Problems can be logical like knocking, drive no detection, PCB burned, Disk dropped, password Locked, HDD drive making noise or It can be a Physical problems when there is No detection, PCB burned, knocking, Bad Sectos, Wrong Capacity, Noise, Fire Flood affected. We can recover data from desktop drives having any problem.");
  }
  if(type === 'Laptop')
  {
    $(".data li").removeClass("Active");
    $(".data li:eq(1)").addClass("Active");
    $("#show-data").html("Laptop Drives are small size hardware as compare to desktop drives, In order to recover of the data special tooling, equipment and handling procedures are required . Laptop hard disk work the same way as Desktop drives work. Laptop Drives Problems can be logical like Partition not accessible, Partition deleted, Formatted, OS re-installed, Virus attack, Ghost restored, OS restored or Physical problems like Knocking, No Detection, PCB burned, Disk dropped, Password locked. We can recover data from laptop drives having any problem.");
  }
  if(type === 'Server')
  {
    $(".data li").removeClass("Active");
    $(".data li:eq(2)").addClass("Active");
    $("#show-data").html("Data recovery from Server. We understand your business enterprise importance, every business need a reliable server for the 24 hours proper working, A little system failure or problem can cause a big damage, so We understand the importance and critical nature of these type of critical problem, issue and failure. We recover data from IDE, SATA, SAS, SCSI, RAID hard disk running on any Operating system. We can back in business within 24-48 hours by recovering your data lost from the malfunctioning servers hard disk. We can recover data from server drives having any problem.");
  }
  if(type === 'PD')
  {
    $(".data li").removeClass("Active");
    $(".data li:eq(3)").addClass("Active");
    $("#show-data").html("Com-Net can recover Data from your Pen Drive / Flash Drive, Memory card, MMC, SD, & Other Memory card with logical and physical issue. Now-a-days every one uses pen drive for temporary data due to portability, capacity and lost in cost feature, But what happend when you lost your data, Don't worry Com-net Solutions will help you to recover you data.");
  }
  if(type === 'Cards')
  {
    $(".data li").removeClass("Active");
    $(".data li:eq(4)").addClass("Active");
    $("#show-data").html("Com-Net can recover Data from your Memory card, MMC, SD, & other memory card with logical and physical issue. Now-a-days every one uses Memory card for Smart mobile, digital camera, and many devices which uses memory card for personal and business small size data because of handy and required storage for small devices, lost of data ( camera pictures, video, files, important data ) is nightmare for anyone, Don't worry Com-net Solutions will help you to recover you data.");
  }
  return false;
}

var os="";
function showOs(os){
  if(os === "Windows")
  {
    $(".os li").removeClass("Active");
    $(".os li:eq(0)").addClass("Active");
    $("#show-os").html("Com-net solutions recovering data from Microsoft Window 3.1 to all latest version of windows family. We also recover your important and valuable data from Home versions to Server versions. It doesn't matter whether it is FAT or NTFS file system, Logical problem ( windows not booting system ), crashed window, blue screen, missing partition, formatted, virus problem, accidentally deleted or your disk is making any noise or system restarts any time.");
  }
  if(os === "Linux")
  {
    $(".os li").removeClass("Active");
    $(".os li:eq(1)").addClass("Active");
    $("#show-os").html("Com-net Solutions can recover data from all types of Linux systems, unlike window FAT or NTFS, Linux system has different file system. Specialized skills are required in order to recover the data from the linux file system.");
  }
}
