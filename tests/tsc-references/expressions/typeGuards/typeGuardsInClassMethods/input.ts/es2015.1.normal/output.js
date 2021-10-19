// Note that type guards affect types of variables and parameters only and 
// have no effect on members of objects such as properties. 
// variables in global
var num;
var var1;
class C1 {
    // Inside function declaration
    p1(param) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string
        // variables in function declaration
        var var2;
        num = typeof var2 === "string" && var2.length; // string
        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    p2(param) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string
        // variables in function declaration
        var var2;
        num = typeof var2 === "string" && var2.length; // string
        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    static s1(param) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string
        // variables in function declaration
        var var2;
        num = typeof var2 === "string" && var2.length; // string
        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    static s2(param) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string
        // variables in function declaration
        var var2;
        num = typeof var2 === "string" && var2.length; // string
        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    constructor(param){
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string
        // variables in function declaration
        var var2;
        num = typeof var2 === "string" && var2.length; // string
        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
}