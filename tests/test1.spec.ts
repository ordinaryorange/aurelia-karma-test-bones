import "aurelia-loader-webpack";
import "aurelia-polyfills";
import { bootstrap,  starting } from "aurelia-bootstrapper";
import { Container, PLATFORM, Expression } from "aurelia-framework";
import {StageComponent} from "aurelia-testing";


describe("aspiration", () => {
    it("dreams to be a plugin", async () => {
        const component = StageComponent.withResources();
        component.configure = (aurelia) => {
            return aurelia.use.standardConfiguration();
        };
        await component.create(bootstrap);
        expect(true).toBeTruthy();
    });

    it("proves that the tests run", () => {
        expect(true).toBeTruthy();
    })

    it("fails the bad test too", () => {
        expect(false).toBeTruthy();
    })
});

