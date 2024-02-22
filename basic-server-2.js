/** @param {NS} ns */
export async function main(ns) {
    const targets = [
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
