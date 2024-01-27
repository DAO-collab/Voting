const Ballot = artifacts.require("Ballot");

contract('Ballot', function (accounts) {
  it("should give right to vote to the voters", async() => {
    const testInstance = await Ballot.deployed();

    await testInstance.giveRightToVote(accounts[1], {from:accounts[0]});
    await testInstance.giveRightToVote(accounts[2], {from:accounts[0]});
    await testInstance.giveRightToVote(accounts[3], {from:accounts[0]});
    await testInstance.giveRightToVote(accounts[4], {from:accounts[0]});
    await testInstance.giveRightToVote(accounts[5], {from:accounts[0]});
    await testInstance.giveRightToVote(accounts[6], {from:accounts[0]});
    
    await testInstance.delegate(accounts[4], {from:accounts[5]});
    await testInstance.delegate(accounts[4], {from:accounts[6]});

    await testInstance.vote(0, {from:accounts[1]});
    await testInstance.vote(1, {from:accounts[2]});
    await testInstance.vote(1, {from:accounts[3]});
    await testInstance.vote(2, {from:accounts[4]});

    const winnerProposal = await testInstance.winningProposal();
    const winnerNameStr = await testInstance.winnerName();

    console.log(web3.utils.hexToString(winnerNameStr));

    assert.equal(winnerProposal.valueOf(), 2, "Error.");
  })
});