/** @param {NS} ns */
export async function main(ns) {
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

      ]

      while(true) {
          for (let target of targets){
            if  (ns.hasRootAccess(target) == true){
              let moneyThresh = ns.getServerMaxMoney(target);
              if (moneyThresh != 0){
                let securityThresh = ns.getServerMinSecurityLevel(target);
                while (ns.getServerMoneyAvailable(target) < moneyThresh) {
                    await ns.grow(target);
                } while (ns.getServerSecurityLevel(target) > securityThresh) {
                    await ns.weaken(target);
                } 
                await ns.hack(target);
              }
            }
            }
          }
}
