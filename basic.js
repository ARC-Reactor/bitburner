/** @param {NS} ns */
export async function main(ns) {
    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's the host its installed on
    let target = ns.getHostname();
    
    
    // Defines how much money a server should have before we hack it
    // In this case, it is set to the maximum amount of money.
    let moneyThresh = ns.getServerMaxMoney(target);
    if (moneyThresh == 0){
      let targets = [
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
        while(true) {
          for (let target of targets){
            if  (ns.hasRootAccess(target) == true){
              moneyThresh = ns.getServerMaxMoney(target);
              if (moneyThresh != 0){
                let securityThresh = ns.getServerMinSecurityLevel(target);
              
                while (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's security level is above our threshold, weaken it
                    await ns.grow(target);
                } while (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's money is less than our threshold, grow it
                    await ns.weaken(target);
                } 
                await ns.hack(target);
              }
            }
         }
        }
    }

    // Defines the maximum security level the target server can
    // have. If the target's security level is higher than this,
    // we'll weaken it before doing anything else
    while(true){
              let securityThresh = ns.getServerMinSecurityLevel(target);
              while (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's security level is above our threshold, weaken it
                  await ns.grow(target);
                  await ns.weaken(target);
              } while (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's money is less than our threshold, grow it
                  await ns.weaken(target);
              } 
              await ns.hack(target);
            }

    }


