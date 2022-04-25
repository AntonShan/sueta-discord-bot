import { AdminModule, AdminModuleOptions } from '@adminjs/nestjs';
import { DMMFClass } from '@prisma/client/runtime';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/prisma';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './database/prisma.service';

export const AdminJSRegistration = AdminModule.createAdminAsync({
  imports: [DatabaseModule],
  inject: [PrismaService],
  useFactory: (prisma: PrismaService): AdminModuleOptions => {
    const dmmf = (prisma as any)._dmmf as DMMFClass;

    AdminJS.registerAdapter({ Database, Resource });

    return {
      adminJsOptions: {
        resources: [
          {
            resource: { model: dmmf.modelMap.SpecialCondition, client: prisma },
            options: {},
          },
          {
            resource: {
              model: dmmf.modelMap.SpecialConditionTranslation,
              client: prisma,
            },
            options: {},
          },
          {
            resource: {
              model: dmmf.modelMap.SpecialConditionModification,
              client: prisma,
            },
            options: {},
          },
          {
            resource: {
              model: dmmf.modelMap.SpecialConditionsOnTrials,
              client: prisma,
            },
            options: {},
          },
          {
            resource: { model: dmmf.modelMap.Trial, client: prisma },
            options: {},
          },
        ],
      },
    };
  },
});
