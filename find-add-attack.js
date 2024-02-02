export async function main(ns) {
    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's the list of currently visible servers
    const infectScript = "basic.js";
    const exeFiles = [
      "BruteSSH.exe",
      "FTPCrack.exe",
      "relaySMTP.exe",
      "HTTPWorm.exe",
      "SQLInject.exe"
    ]
    let targets = [
      "n00dles",
      "nectar-net",
      "max-hardware",
      "neo-net",
      "omega-net",
      "foodnstuff",
      "sigma-cosmetics",
      "joesguns",
      "hong-fang-tea",
      "harakiri-sushi",
      "CSEC",
      "phantasy",
      "netlink",
      "zb-institute",
      "crush-fitness",
      "I.I.I.I",
      "avmnite-02h",
      "syscore",
      "iron-gym",
      "zer0",
      "silver-helix",
      "the-hub",
      "computek",
      "johnson-ortho",
      "rothman-uni",
      "summit-uni",
      "catalyst",
      ]


    function infect (target){
      if (ns.hasRootAccess(target) == true){
        ns.killall(target);
        let targetRam = ns.getServerMaxRam(target);
        if (targetRam > 0){
          ns.scp(infectScript, target);
          let ram = Math.trunc(targetRam / ns.getScriptRam(infectScript, target));
          ns.exec(infectScript, target, ram);
        }
      }
    }  
    function getRoot(target){
      let myHackingLevel = ns.getHackingLevel();
      let portLevel = 0
      for (let exe of exeFiles){
        if (ns.fileExists(exe, "home")){
          ++portLevel;
        }
      }
      if (ns.hasRootAccess(target) == false && ns.getServerRequiredHackingLevel(target) <= myHackingLevel && ns.getServerNumPortsRequired(target) <= portLevel){
        if (portLevel == 1){
          ns.brutessh(target);              
          }
        else if(portLevel == 2){
          ns.brutessh(target);
          ns.ftpcrack(target);              
          }
        else if(portLevel == 3){
          ns.brutessh(target);
          ns.ftpcrack(target);
          ns.relaysmtp(target);              
          }
        else if(portLevel == 4){
          ns.brutessh(target);
          ns.ftpcrack(target);
          ns.relaysmtp(target);
          ns.httpworm(target);              
          }
        else if(portLevel == 5){
          ns.brutessh(target);
          ns.ftpcrack(target);
          ns.relaysmtp(target);
          ns.httpworm(target);
          ns.sqlinject(target);              
          }
        ns.nuke(target);
        infect(target);
      }  
    }

    for (let target of targets){
      infect(target);
    }
    // Infinite loop that continously hacks/grows/weakens the target server
    while(true) {
      for (let target of targets){
        if  (ns.hasRootAccess(target) == true){
          let moneyThresh = ns.getServerMaxMoney(target);
          let securityThresh = ns.getServerMinSecurityLevel(target);
          if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(target);
          }
          else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
            await ns.grow(target);
          }
          else {
            // Otherwise, hack it
            await ns.hack(target);
          }
            
        }
        else{getRoot(target);
        }
      }
    }
  }
