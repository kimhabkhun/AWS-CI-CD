import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "aws-sst",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
