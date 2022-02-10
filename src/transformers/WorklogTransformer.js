/* ============
 * Project Transformer
 * ============
 *
 * The transformer for the project.
 */

import BaseTransformer from "./BaseTransformer";

export default class WorklogTransformer extends BaseTransformer {
  /**
   * Method used to transform a fetched project.
   *
   * @param worklog The fetched worklog .
   *
   * @returns {Object} The transformed worklog.
   */
  static fetch(worklog) {
    return {
      date: worklog.date,
      progress: worklog.progress,
      isVersioned: worklog.is_versioned,
      isProgressLog: worklog.is_progress_log,
      progressEntryId: worklog.progress_entry_id,
      progressEntryComments: worklog.progress_entry_comments,
      comment: worklog.comment,
      attachments: worklog.attachments,
      hasSignatures: worklog.has_signatures,
      tags: worklog.tags,
      activity: worklog.activity,
      quantity: worklog.quantity,
      theme: worklog.theme,
      projectName: worklog.project_name,
      subLocationName: worklog.sub_location_name,
      cost: worklog.cost,
      value: worklog.value,
      provider: worklog.provider,
      status: worklog.status,
      assigneeId: worklog.assignee_id,
      assigneeName: worklog.assignee_name,
      creatorId: worklog.creator_id,
      creatorName: worklog.creator_name,
      projectEntryId: worklog.project_entry_id,
      projectId: worklog.project_id,
      createdAt: worklog.created_at,
      updatedAt: worklog.updated_at,
      startDate: worklog.start_date,
      endDate: worklog.end_date,
      startTime: worklog.start_time,
      endTime: worklog.end_time,
      time: worklog.time,
      locLatitude: worklog.loc_latitude,
      locLongitude: worklog.loc_longitude,
    };
  }

  /**
   * Method used to transform a send project.
   *
   * @param worklog The worklog to be send.
   *
   * @returns {Object} The transformed project.
   */
  static send(worklog) {
    return {
      activity: worklog.activity,
    };
  }
}
