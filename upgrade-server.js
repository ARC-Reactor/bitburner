/** @param {NS} ns */
export async function main(ns) {
  // How much RAM each purchased server will have. In this case, it'll
  // be 8GB.
  let ram = 1024;
  while (ram < 4105) {


    // Iterator we'll use for our loop
    let i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < 25) {
      // Check if we have enough money to purchase a server
      let hostname = ("pserv-" + i);
      if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerUpgradeCost(hostname, ram)) {
        // If we have enough money, then:
        //  1. Purchase the server
        //  2. Copy our hacking script onto the newly-purchased server
        //  3. Run our hacking script on the newly-purchased server with 3 threads
        //  4. Increment our iterator to indicate that we've bought a new server
        let scriptname = "basic-server.js";

        ns.upgradePurchasedServer(hostname, ram);
        ns.killall(hostname);
        let scriptram = Math.trunc(ram / ns.getScriptRam(scriptname, hostname));
        ns.exec(scriptname, hostname, scriptram);
        ++i;
      
      }
      await ns.sleep(60000);
    }
    ram = ram * 2;
    await ns.sleep(1000);
  }
}
