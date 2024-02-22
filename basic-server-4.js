/** @param {NS} ns */
export async function main(ns) {
    const targets = [
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
