let earth = {
    isRound: true,
    numberFromSun: 3
};

describe("Earth", () =>
{   
    let arr;
// ruleaza inainte de fiecare "it" => setUp()
    beforeEach(() =>
    {
        arr = [1,3,5];
    });
// ruleaza dupa fiecare "it" => tearDown()
    afterEach(() =>
    {
        arr = [];
    });

    it("is round", () =>
    {
        expect(earth.isRound).toBe(true);
    });
    it("is the third planet from the sun", () =>
    {
        expect(earth.numberFromSun).toBe(3);
    });
});

function add(a, b, c)
{
    return a+b+c;
}
// Spies Clocks
describe("Testing With Spies", () =>
{
    beforeEach(() =>
    {
    // Spy
         addSpy = spyOn(window, "add").and.callThrough();
         result = addSpy(1,2,3);

    // Clock
        sample = jasmine.createSpy("sampleFunction");
        jasmine.clock().install();
    });
    afterEach(() =>
    {
        jasmine.clock().uninstall();
    })

    it("is can have params tested", () =>
    {
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1,2,3);
    });
    it("testing frequency of calls", () =>
    {
        expect(addSpy.calls.any()).toBe(true);
        expect(addSpy.calls.count()).toBe(1);
    });

    it("is only invoked after 1000 miliseconds", () =>
    {
        setTimeout(() =>
        {
            sample();

        }, 1000);
        jasmine.clock().tick(999);
        expect(sample).not.toHaveBeenCalled();
        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
    });
})