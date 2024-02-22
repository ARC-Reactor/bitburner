/** @param {NS} ns */
export async function main(ns) {
    // How much RAM each purchased server will have. In this case, it'll
    // be 8GB.
    const ram = 32768;

    // Iterator we'll use for our loop
    let i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < 5) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let scriptname = "basic-server-0.js"
            let hostname = ns.purchaseServer("pserv-" + i, ram);
            ns.scp(scriptname, hostname);
            let hostRam = ns.getServerMaxRam(hostname);
            let ram = Math.trunc(hostRam / ns.getScriptRam(scriptname, hostname));
            ns.exec(scriptname, hostname, ram);
            ++i;
            await ns.sleep(60000);
        }
    }
    
        await ns.sleep(60000);
    while (i < 10) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let scriptname = "basic-server-1.js"
            let hostname = ns.purchaseServer("pserv-" + i, ram);
            ns.scp(scriptname, hostname);
            let hostRam = ns.getServerMaxRam(hostname);
            let ram = Math.trunc(hostRam / ns.getScriptRam(scriptname, hostname));
            ns.exec(scriptname, hostname, ram);
            ++i;
            await ns.sleep(60000);
        }
    }
    
        await ns.sleep(60000);
    while (i < 15) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let scriptname = "basic-server-2.js"
            let hostname = ns.purchaseServer("pserv-" + i, ram);
            ns.scp(scriptname, hostname);
            let hostRam = ns.getServerMaxRam(hostname);
            let ram = Math.trunc(hostRam / ns.getScriptRam(scriptname, hostname));
            ns.exec(scriptname, hostname, ram);
            ++i;
            await ns.sleep(60000);
        }
    }
    
        await ns.sleep(60000);
    while (i < 20) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let scriptname = "basic-server-3.js"
            let hostname = ns.purchaseServer("pserv-" + i, ram);
            ns.scp(scriptname, hostname);
            let hostRam = ns.getServerMaxRam(hostname);
            let ram = Math.trunc(hostRam / ns.getScriptRam(scriptname, hostname));
            ns.exec(scriptname, hostname, ram);
            ++i;
            await ns.sleep(60000);
        }
    }
    
        await ns.sleep(60000);
    while (i < 25) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let scriptname = "basic-server-4.js"
            let hostname = ns.purchaseServer("pserv-" + i, ram);
            ns.scp(scriptname, hostname);
            let hostRam = ns.getServerMaxRam(hostname);
            let ram = Math.trunc(hostRam / ns.getScriptRam(scriptname, hostname));
            ns.exec(scriptname, hostname, ram);
            ++i;
            await ns.sleep(60000);
        }
    }
    
        await ns.sleep(60000);    
}
