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
    const targets = [
        "n00dles",
        "zer0",
        "nectar-net",
        "omega-net",
        "the-hub",
        "catalyst",
        "netlink",
        "zb-institute",
        "summit-uni",
        "I.I.I.I",
        "rho-construction",
        "snap-fitness",
        "alpha-ent",
        "global-pharm",
        "aevum-police",
        "CSEC",
        "foodnstuff",
        "sigma-cosmetics",
        "joesguns",
        "hong-fang-tea",
        "harakiri-sushi",
        "max-hardware",
        "neo-net",
        "avmnite-02h",
        "silver-helix",
        "computek",
        "johnson-ortho",
        "rothman-uni",
        "lexo-corp",
        "syscore",
        "millenium-fitness",
        "galactic-cyber",
        "unitalife",
        "zeus-med",
        "aerocorp",
        "omnia",
        "icarus",
        "zb-def",
        "univ-energy",
        "infocomm",
        "nova-med",
        "deltaone",
        "defcomm",
        "taiyang-digital",
        "solaris",
        "crush-fitness",
        "phantasy",
        "iron-gym",
        "microdyne",
        "fulcrumtech",
        "run4theh111z",
        "clarkinc",
        "megacorp",
        "ecorp",
        "blade",
        "b-and-a",
        "kuai-gong",
        "nwo",
        "applied-energetics",
        "helios",
        "vitalife",
        "omnitek",
        ".",
        "titan-labs",
        "stormtech",
        "4sigma",
        "powerhouse-fitness",
        "fulcrumassets",
        "The-Cave",
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
      getRoot(target);
    }

    while(true) {
      for (let target of targets){
        if  (ns.hasRootAccess(target) == true){
          await ns.sleep(5000)            
        }
        else{getRoot(target);
        await ns.sleep(5000)
        }
      }
    }
  }
