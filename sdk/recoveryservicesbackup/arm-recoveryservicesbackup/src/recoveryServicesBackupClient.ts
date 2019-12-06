/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { RecoveryServicesBackupClientContext } from "./recoveryServicesBackupClientContext";


class RecoveryServicesBackupClient extends RecoveryServicesBackupClientContext {
  // Operation groups
  backupResourceVaultConfigs: operations.BackupResourceVaultConfigs;
  protectedItems: operations.ProtectedItems;
  protectedItemOperationResults: operations.ProtectedItemOperationResults;
  recoveryPoints: operations.RecoveryPoints;
  restores: operations.Restores;
  backupPolicies: operations.BackupPolicies;
  protectionPolicies: operations.ProtectionPolicies;
  protectionPolicyOperationResults: operations.ProtectionPolicyOperationResults;
  backupJobs: operations.BackupJobs;
  jobDetails: operations.JobDetails;
  jobCancellations: operations.JobCancellations;
  jobOperationResults: operations.JobOperationResults;
  exportJobsOperationResults: operations.ExportJobsOperationResults;
  jobs: operations.Jobs;
  backupProtectedItems: operations.BackupProtectedItems;
  operation: operations.Operation;
  protectionIntent: operations.ProtectionIntentOperations;
  backupStatus: operations.BackupStatus;
  featureSupport: operations.FeatureSupport;
  backupProtectionIntent: operations.BackupProtectionIntent;
  backupUsageSummaries: operations.BackupUsageSummaries;
  backupEngines: operations.BackupEngines;
  protectionContainerRefreshOperationResults: operations.ProtectionContainerRefreshOperationResults;
  protectableContainers: operations.ProtectableContainers;
  protectionContainers: operations.ProtectionContainers;
  backupWorkloadItems: operations.BackupWorkloadItems;
  protectionContainerOperationResults: operations.ProtectionContainerOperationResults;
  backups: operations.Backups;
  protectedItemOperationStatuses: operations.ProtectedItemOperationStatuses;
  itemLevelRecoveryConnections: operations.ItemLevelRecoveryConnections;
  backupOperationResults: operations.BackupOperationResults;
  backupOperationStatuses: operations.BackupOperationStatuses;
  protectionPolicyOperationStatuses: operations.ProtectionPolicyOperationStatuses;
  backupProtectableItems: operations.BackupProtectableItems;
  backupProtectionContainers: operations.BackupProtectionContainers;
  securityPINs: operations.SecurityPINs;
  backupResourceStorageConfigs: operations.BackupResourceStorageConfigs;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the RecoveryServicesBackupClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription Id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.RecoveryServicesBackupClientOptions) {
    super(credentials, subscriptionId, options);
    this.backupResourceVaultConfigs = new operations.BackupResourceVaultConfigs(this);
    this.protectedItems = new operations.ProtectedItems(this);
    this.protectedItemOperationResults = new operations.ProtectedItemOperationResults(this);
    this.recoveryPoints = new operations.RecoveryPoints(this);
    this.restores = new operations.Restores(this);
    this.backupPolicies = new operations.BackupPolicies(this);
    this.protectionPolicies = new operations.ProtectionPolicies(this);
    this.protectionPolicyOperationResults = new operations.ProtectionPolicyOperationResults(this);
    this.backupJobs = new operations.BackupJobs(this);
    this.jobDetails = new operations.JobDetails(this);
    this.jobCancellations = new operations.JobCancellations(this);
    this.jobOperationResults = new operations.JobOperationResults(this);
    this.exportJobsOperationResults = new operations.ExportJobsOperationResults(this);
    this.jobs = new operations.Jobs(this);
    this.backupProtectedItems = new operations.BackupProtectedItems(this);
    this.operation = new operations.Operation(this);
    this.protectionIntent = new operations.ProtectionIntentOperations(this);
    this.backupStatus = new operations.BackupStatus(this);
    this.featureSupport = new operations.FeatureSupport(this);
    this.backupProtectionIntent = new operations.BackupProtectionIntent(this);
    this.backupUsageSummaries = new operations.BackupUsageSummaries(this);
    this.backupEngines = new operations.BackupEngines(this);
    this.protectionContainerRefreshOperationResults = new operations.ProtectionContainerRefreshOperationResults(this);
    this.protectableContainers = new operations.ProtectableContainers(this);
    this.protectionContainers = new operations.ProtectionContainers(this);
    this.backupWorkloadItems = new operations.BackupWorkloadItems(this);
    this.protectionContainerOperationResults = new operations.ProtectionContainerOperationResults(this);
    this.backups = new operations.Backups(this);
    this.protectedItemOperationStatuses = new operations.ProtectedItemOperationStatuses(this);
    this.itemLevelRecoveryConnections = new operations.ItemLevelRecoveryConnections(this);
    this.backupOperationResults = new operations.BackupOperationResults(this);
    this.backupOperationStatuses = new operations.BackupOperationStatuses(this);
    this.protectionPolicyOperationStatuses = new operations.ProtectionPolicyOperationStatuses(this);
    this.backupProtectableItems = new operations.BackupProtectableItems(this);
    this.backupProtectionContainers = new operations.BackupProtectionContainers(this);
    this.securityPINs = new operations.SecurityPINs(this);
    this.backupResourceStorageConfigs = new operations.BackupResourceStorageConfigs(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  RecoveryServicesBackupClient,
  RecoveryServicesBackupClientContext,
  Models as RecoveryServicesBackupModels,
  Mappers as RecoveryServicesBackupMappers
};
export * from "./operations";
