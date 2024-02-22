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
