import "aurelia-polyfills";
import { bootstrap,  starting } from "aurelia-bootstrapper";
import { Container, PLATFORM } from "aurelia-framework";
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
});