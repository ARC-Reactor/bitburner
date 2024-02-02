/** @param {NS} ns */
export async function main(ns) {
    const targets = [
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

      while(true) {
          for (let target of targets){
            if  (ns.hasRootAccess(target) == true){
              let moneyThresh = ns.getServerMaxMoney(target);
              let securityThresh = ns.getServerMinSecurityLevel(target);
              if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
                  await ns.weaken(target);
              } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
                  await ns.grow(target);
              } else {
            // Otherwise, hack it
                  await ns.hack(target);
              }
            }
            //else{getRoot(target);}
            }
          }
}
