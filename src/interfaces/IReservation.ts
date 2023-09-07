// public int Id { get; set; }
// public int DeskId { get; set; }
// public DateTime StartDate { get; set; }
// public DateTime EndDate { get; set; }

export interface IReservation {
    id: number,
    deskId: number,
    startDate: Date,
    endDate: Date,
}